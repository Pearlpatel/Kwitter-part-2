var firebaseConfig = {
    apiKey: "AIzaSyA1_0-DdJtjyC0JjkJ5cf8BqkP6vU1sddo",
    authDomain: "kwitter-project-35cda.firebaseapp.com",
    databaseURL: "https://kwitter-project-35cda-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-35cda",
    storageBucket: "kwitter-project-35cda.appspot.com",
    messagingSenderId: "1058686945700",
    appId: "1:1058686945700:web:208fb8d242df2bbe6a9931",
    measurementId: "G-8GJP1SN3Y2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function add_users() {
    input_name=document.getElementById("user_input").value;
  firebase.database().ref("/").child(input_name).update({
      purpose:"adding room name"
  });
}