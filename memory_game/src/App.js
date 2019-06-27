import React, { Component } from "react";
import NavBar from './components/NavBar'
import Wrapper from './components/Wrapper'
import Footer from './components/Footer'
import ImageCard from './components/ImageCard'
import Header from './components/Header'
import images from './images.json'
import './App.css';

class App extends Component {
  state = {
    images,
    score: 0,
    topscore: 0
  };

  render() {
    return (
      <>      
        <NavBar />
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
