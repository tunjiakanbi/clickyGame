import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import cardData from "./images.json";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    cardData,
    score: 0,
    highscore: 0
  }

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cardData.forEach(cardImgs => {
      cardImgs.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  handleClick = id => {
    // this.state.cardData.forEach()
    this.state.cardData.find((o, i) => {
      if (o.id === id) {
        if(cardData[i].count === 0){
          cardData[i].count = cardData[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cardData.sort(() => Math.random() - 0.5)
          return true; 
        } else { 
          this.gameOver();
          return false;
        }
      }
      return false;
    });
  }
  
  render() {
    return (
 <div>
   <NavBar score={this.state.score} highscore={this.state.highscore}>

   </NavBar>
   <Jumbotron>

   </Jumbotron>
   <Wrapper>
   {this.state.cardData.map( cardImgs => (
    <Cards
      id={cardImgs.id}
      name={cardImgs.name}
      image={cardImgs.image}
      handleClick={this.handleClick}
      >
  </Cards>
    )
  )}  
  </Wrapper>
  
   <Footer>

   </Footer>
 </div>
    );
  }
}

export default App;
