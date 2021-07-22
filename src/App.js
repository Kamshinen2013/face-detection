
import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import './App.css';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Footer from './Components/Footer/Footer';


const app = new Clarifai.App({
  apiKey: "3c596432ad6c49fab28140777a9b0f84",
});


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
      imageurl: ''
    }
  }

  //input will have an onInputChange function
  onInputChange = (event) => { //onInputChange is later passed as a prop into the <imageLinkForm /> tag down this page in order to link it
      this.setState({input: event.target.value}); //input becomes the value that is inserted into it
      //event.target.value is used to get value from an input
  }
//Onsubmit is created to be able to upload the image upon clicking of detect button
  onButtonSubmit = () => {
    this.setState({imageurl: this.state.input}); //onButtonSubmit, we want the image url to be what is contained in the input
    //the imageurl is later passed into the face recognition box
    app.models.predict(Clarifai.COLOR_MODEL, "https://samples.clarifai.com/face-det.jpg")
    .then(
    function(response){
      //do something with response
      console.log(response);

    },
    function(err){
      //there was an error
     }
    );
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

      <FaceRecognition imageurl={this.state.imageurl} />  
      {/* this.state.imageurl is used because it is contained in this.state which carried what is contained in the input */}

      <Footer />
    </div>
  );
  }
}

export default App;

// The background particles is obtained from https://www.npmjs.com/package/react-particles-js go there an install it in your terminal
