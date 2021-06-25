// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAULYo3Px2pVEUp-53st3Y8RVhjys1PaKc",
  authDomain: "let-s-chat-28f7f.firebaseapp.com",
  databaseURL: "https://let-s-chat-28f7f-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-28f7f",
  storageBucket: "let-s-chat-28f7f.appspot.com",
  messagingSenderId: "837869970175",
  appId: "1:837869970175:web:0fbf3a0eeb54b5bf0a62ca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("room name-" + Room_names);
      row = "<div class= 'room_name' id= " + Room_names + "onclick= 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();
function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "addingRoomName"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
