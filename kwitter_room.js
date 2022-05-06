const firebaseConfig = {
    apiKey: "AIzaSyDyrmyBjT7EWig7cPTBkRnQFr4k_dJeGAo",
    authDomain: "class-93-6e535.firebaseapp.com",
    projectId: "class-93-6e535",
    storageBucket: "class-93-6e535.appspot.com",
    databaseURL: "https://kwitter-ea7ce-default-rtdb.firebaseio.com",
    messagingSenderId: "491094086500",
    appId: "1:491094086500:web:cb39dac2882107166aa071"
};

const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function add_room() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    locatStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
