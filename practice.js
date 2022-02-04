var firebaseConfig = {
    apiKey: "AIzaSyAvrKioSk6is53TojGHrYXlTsQFlshVbfg",
    authDomain: "kwitter-55132.firebaseapp.com",
    databaseURL: "https://kwitter-55132-default-rtdb.firebaseio.com",
    projectId: "kwitter-55132",
    storageBucket: "kwitter-55132.appspot.com",
    messagingSenderId: "422631143040",
    appId: "1:422631143040:web:78660c30520512fc7a5865"
      };
      firebase.initializeApp(firebaseConfig);
      function addUser() {
          user_name=document.getElementById("user_name").value;
          firebase.database().ref("/").child(user_name).update({
              purpose:"adding user"
          });
      }
//ADD YOUR FIREBASE LINKS