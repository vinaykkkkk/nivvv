
function submitName() {
    let userName = document.getElementById("userName").value.trim();
    if (userName === "") {
        alert("Enter Your Name!");
    } else {
        localStorage.setItem("userName", userName);
        window.location.href = "birthday.html";
    }
}

// Function to check the secret word
function checkSecretWord() {
    let secretWord = document.getElementById("secretWord").value.trim().toLowerCase();
    if (secretWord === "fake batman" || secretWord === "backup") {
        document.getElementById("birthdayMessage").classList.add("hidden");
        document.getElementById("puzzle").classList.add("hidden");
        document.getElementById("hint").classList.add("hidden");
        document.getElementById("formGroup").classList.add("hidden");
        document.getElementById("birthdayWish").classList.remove("hidden");
        document.getElementById("birthdayWish").innerText = `happiest birthday, ${localStorage.getItem("userName")}! 😭💗`;
        document.getElementById("signature").classList.remove("hidden");
    } else {
        alert("u dumb u cant even do this?!");
    }
}

// Initial alert on page load
window.onload = function() {
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        alert("ur phone is hacked!💀👍");
    } else if (window.location.pathname.endsWith('birthday.html')) {
        alert("puzzle is v easy, but for dumb ppl like u it's v hard");
        let userName = localStorage.getItem("userName");
        if (userName) {
            document.getElementById("birthdayWish").innerText = `happy birthday, ${userName}!`;
            document.getElementById("birthdayWish").classList.add("highlight");
        } else {
            alert("please enter your name!");
            window.location.href = "index.html";
        }
    }
}