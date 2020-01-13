import React from 'react';
import Wrapper from "./components/Wrapper";
import Navbar from './components/Navbar';
import FriendCard from './components/FriendCard';
import friends from './friends.json';

class App extends React.Component{
  // Setting this.state.friends to the friends json array
  state = {
    score:0,
    topscore:0,
    friends
  };

  clickCount = () =>{
    this.setState({score:this.state.score+1});
    alert(this.state.score);
  };

  render(){
    return(
      <Wrapper>
        <Navbar score="0" topscore="0" message="Click an image to begin!"/>
        {this.state.friends.map(friend => (
          <FriendCard
            onClick = {this.clickCount}
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
