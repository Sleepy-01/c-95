
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7reRYxw52vuveRiY5WuB7Hz-IgLPdEZ8",
    authDomain: "kwitterx3.firebaseapp.com",
    databaseURL: "https://kwitterx3-default-rtdb.firebaseio.com",
    projectId: "kwitterx3",
    storageBucket: "kwitterx3.appspot.com",
    messagingSenderId: "144731333188",
    appId: "1:144731333188:web:2443080bc832d33bfd9211"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}