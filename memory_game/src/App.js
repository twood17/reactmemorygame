import React, { Component } from "react";
import NavBar from './components/NavBar'
import Wrapper from './components/Wrapper'
import Footer from './components/Footer'
import ImageCard from './components/ImageCard'
import Header from './components/Header'
import images from './images.json'

class App extends Component {
 state = {
    images,
    score: 0,
    topscore: 0
  };

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
    image => image.id === id);

  //filters images that have already been clicked
  let beenClicked = this.state.images.filter(
    image => image.clicked === true);

  //handles switching the array to true and shuffles the images
  if (!clickedImage.clicked) {
    clickedImage.clicked = true;
    this.shuffleArray(images);

    //changes score and topscore state
    this.setState({
      score: this.state.score + 1, 
      topscore: this.state.score + 1 > this.state.topscore
        ? this.state.score + 1 
        : this.state.topscore
    });   
  }  

  console.log(this.state.topscore)

  if (this.state.score === 12) {
    this.setState({
      score: 0
    });
    this.shuffleArray(images);
    beenClicked.forEach(image => {
      image.clicked = false;
    });
  } else {
    beenClicked.forEach(image => {
      image.clicked = false;
    });
    
    this.shuffleArray(images);

    this.setState({
      score: 0
    });
  }
}

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
