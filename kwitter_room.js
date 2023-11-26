
//ADD YOUR FIREBASE LINKS HERE

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' > #" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}