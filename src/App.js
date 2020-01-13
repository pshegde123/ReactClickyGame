import React from 'react';
import Wrapper from "./components/Wrapper";
import Navbar from './components/Navbar';
import FriendCard from './components/FriendCard';
import friends from './friends.json';

class App extends React.Component{
  // Setting this.state.friends to the friends json array
  state = {
    score:0,
    topScore:0,
    maxScore:12,
    message:"CLICK AND IMAGE TO BEGIN!" ,
    friends
  };

  clickCount = id =>{
    const friendList = this.state.friends;
    const friendClicked = friendList.filter(card=>card.id === id);
    if(!friendClicked[0].clicked){
      friendClicked[0].clicked = true;
        this.handleCorrectClick();
        this.randomizeCharacters(friends);
        this.setState({friends});
    }
    else{
      this.handleIncorrectClick();
    }
  };

 // Handler for correct guesses/clicks
 handleCorrectClick = () => {
  if (this.state.score + 1 > this.state.topScore) {
    this.setState({ topScore: this.state.topScore + 1 });
  }
  if (this.state.score + 1 >= this.state.maxScore) {
    this.setState({
      score: this.state.score + 1,
      message:"CONGRATS! YOU WIN!",
    });
  } else {
    this.setState({
      score: this.state.score + 1,
      message:"YOU GUESSED CORRECTLY!",
    });
  }
};

// Function to randomize the characters
randomizeCharacters = characters => {
  characters.sort((a, b) => {
    return 0.5 - Math.random();
  });
};

  // Handler for incorrect guesses/clicks
handleIncorrectClick = () => {
  this.setState({
    message: "INCORRECT. PLAY AGAIN?",
  });
  // this.toggleIncorrectAnimation();
  this.resetGame();
};

// Resets the game
resetGame = id => {
  const friends = this.state.friends;
  for (let i = 0; i < friends.length; i++) {
    friends[i].clicked = false;
  }
  this.setState({ score: 0 });
};

  render(){
    return(
      <Wrapper>
        <Navbar score={this.state.score} topScore={this.state.topScore} message={this.state.message}/>
        {this.state.friends.map(friend => (
          <FriendCard
            clickCount = {this.clickCount}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    )
  }

}
export default App;
