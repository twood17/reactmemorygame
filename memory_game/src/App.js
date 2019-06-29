import React, { Component } from "react";
import NavBar from './components/NavBar'
import Wrapper from './components/Wrapper'
import Footer from './components/Footer'
import ImageCard from './components/ImageCard'
import Header from './components/Header'
import images from './images.json'

class App extends Component {
 constructor(props) {
   super(props)
  this.state = {
    images,
    score: 0,
    topscore: 0,
  };
  this.handleOnClick = this.handleOnClick.bind(this)
}

  shuffleArray = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }; 

handleOnClick = id => {
  //grabs the id of the clicked image
  
  let clickedImage = this.state.images.filter(
    image => image.id === id)[0];

  //sets the clicked attr to true for all the images to be called later
  let gameReset = this.state.images.filter(
    image => image.clicked === true
  );  

  //handles switching the array to true and shuffles the images
  if (clickedImage.clicked === false) {
    clickedImage.clicked = true;
    this.shuffleArray(images);

    //changes score and topscore state
    this.setState({
      score: this.state.score + 1 , 
      topscore: this.state.score + 1 > this.state.topscore ? this.state.score + 1 : this.state.topscore
    });   
  } else if (clickedImage.clicked === true) { 
  //calls the gameReset variable to set all the clicked attr to true, so they can all be reset to 
  //false to start the game over
    gameReset.forEach(image => {
      image.clicked = false;
    });  
    this.shuffleArray(images)
    this.setState({
      score: 0,
    })
  }
}

  //render the page
  render() {
    return (
      <>      
        <NavBar score={this.state.score} topscore={this.state.topscore} />
        <Header />
        <Wrapper>
          {this.state.images.map(card => (
            <ImageCard
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
              handleOnClick={this.handleOnClick}
            />
          ))}
        </Wrapper>
        <Footer />
      </>
    );
  }
}

export default App;
