async function loadDashboard() {
    if (localStorage.getItem("loggedIn") !== "true") {
        return window.location.href = "/login.html";
    }

    const userId = localStorage.getItem("userId");
    const username = localStorage.getItem("username");

    document.getElementById("name").innerText = username;

    const avatarRes = await fetch(`https://thumbnails.roblox.com/v1/users/avatar?userIds=${userId}&size=150x150&format=Png`);
    const avatarData = await avatarRes.json();

    document.getElementById("avatar").src = avatarData.data[0].imageUrl;
}

function logout() {
    localStorage.clear();
    window.location.href = "/";
}

loadDashboard();
