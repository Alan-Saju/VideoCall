import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 //your firebase config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const servers={
  iceServers: [
    {
      urls: [
        "stun:stun1.l.google.com:19302",
        "stun:stun2.l.google.com:19302"],
      
    }
  ]
};

let pc=new RTCPeerConnection(servers);
let localStream=null;
let remoteStream= null;

const webcamButton=document.getElementById('webcamButton');
const webcamVideo=document.getElementById('webcamVideo');
const callButton=document.getElementById('callButton');
const callInput=document.getElementById('callInput');
const answerButton=document.getElementById('answerButton');
const remoteVideo=document.getElementById('remoteVideo');
const hangupButton=document.getElementById('hangupButton');



webcamButton.onclick=async()=>{
  localStream=await navigator.mediaDevices.getUserMedia({video:true,audio:true});
  remoteStream=new MediaStream(); 
  //push tracks from local stream to peer connection
  localStream.getTracks().forEach(track=>{
    pc.addTrack(track,localStream);
  });

  pc.ontrack=(event)=>{
    event.streams[0].getTracks().forEach(track=>{
      remoteStream.addTrack(track);
    });

    webcamVideo.srcObject=localStream;
    remoteStream.srcObject=remoteStream;


  };

}