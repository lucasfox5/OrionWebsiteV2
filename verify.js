function generateCode() {
    const username = document.getElementById("username").value;
    if (!username) return alert("Enter a username");

    const code = Math.random().toString(36).substring(2, 10);
    localStorage.setItem("verifyCode", code);
    localStorage.setItem("verifyUser", username);

    document.getElementById("codeDisplay").innerHTML =
        `Put this code in your Roblox bio:<br><b>${code}</b><br><br>
        After adding it, click <a href="check.html">Verify</a>`;
}
