let password = "VOLUNTEER";
(function passcodeprotect() {
    let passcode = prompt("Enter Password");
    while (passcode !== password) {
        alert("Incorrect Password");
        return passcodeprotect();
    }
    }());
    alert('Welcome :)');
    document.getElementById("container").style.display = "block";