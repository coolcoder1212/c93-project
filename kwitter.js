function add_user() {
    user_name = document.getElementById("userinput").value;
    console.log(user_name);
    localStorage.setItem("username", username);
    window.location = "kwitter_room.html";
}