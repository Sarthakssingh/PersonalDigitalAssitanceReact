
import './App.css';
import Demo from './components/Body/Demo';
import AlexaImage from "./images/alexa.png";
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png'
//import MyActivity from './components/Body/MyActivity';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
//import Selection from './components/header/Selection';
//import Modal from './components/Body/Modal';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1 class="text-center bg-primary m-1">Personal Digital Assistance</h1>
      <div class="container">
        <div class="row">
          <div class="col-4">
        <Demo title = "Alexa" handle = "@alexa" image = {AlexaImage} description = "Alexa was devloped by Amazon"/>
      </div>
          <div class="col-4">
          <Demo title = "Cortana" handle = "@cortana" image={CortanaImage} description = "Cortana was devloped by Microsoft"/>
      </div>
          <div class="col-4">
          <Demo title = "Siri" handle = "@siri" image={SiriImage} description = "Siri was devloped by Apple"/>
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
