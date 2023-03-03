
// https://firebase.google.com/docs/web/setup#available-libraries

var firebaseConfig = {
  apiKey: "AIzaSyABJo7dt1Z_UbTxMmvTpbklQGUGX4uXhY8",
  authDomain: "rabbitchat-e3fb6.firebaseapp.com",
  databaseURL: "https://rabbitchat-e3fb6-default-rtdb.firebaseio.com",
  projectId: "rabbitchat-e3fb6",
  storageBucket: "rabbitchat-e3fb6.appspot.com",
  messagingSenderId: "952503114495",
  appId: "1:952503114495:web:24a54dff762d71cfda8aca"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="hola"+user_name+"!";

function addRoom(){
  room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose:"adding_room_name"
  });
  localStorage.setItem("room_name",room_name);
  window.location.replace("kwitter_page.html");
}

function getData(){
  firebase.database("/"+room_name).on('value',function (snapshot){
    document.getElementById("output").innerHTML="";
    snapshot.forEach(function(childSnapshot){
      childkey=childSnapshot.key;
      room_name=childkey;
      console.log("room_name"+room_name);
      row="<div class='room_name' id="+room_name+"onclick='redirectToRoomName(this.id)'>#"+room_name+"</div><br>";
      document.getElementById("output").innerHTML+=row;
    });
  });
}
  getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}