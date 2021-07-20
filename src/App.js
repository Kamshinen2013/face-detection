
import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import './App.css';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import Footer from './Components/Footer/Footer';

// This is for the weblike background seen
const particlesOptions = {
  particles: {
    number: {
      value: 110,
      density: {
        enable: true,
        value_area: 900
      }
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',  //This is where users can input their link
    }
  }

  //input will have an onInputChange function
  onInputChange = (event) => { //onInputChange is later passed as a prop into the <imageLinkForm /> tag down this page in order to link it
      console.log(event.target.value); //event.target.value is used to get value from an input
  }
//Onsubmit is created to be able to upload the image upon clicking of detect button
  onButtonSubmit = () => {
    console.log("Submitting image link for detection")
  }

  render() {
  return (
    <div className="App">
         <Particles  className= "particles"
              params={particlesOptions}
            /> 

      <Navigation />
       <Logo />
       <Rank />
       <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit= {this.onButtonSubmit}/> 
       {/* Because onInputChange is property of the class App, this.onInputChange is used in order to acces it. 
       Note also that onInputChange will have to be triggered by being inserted destructuredly into the ImageLinkForm js FILE*/}

      {/*<faceRecognition />  */}

      <Footer />
    </div>
  );
  }
}

export default App;

// The background particles is obtained from https://www.npmjs.com/package/react-particles-js go there an install it in your terminal
