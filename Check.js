async function checkVerification() {
    const username = localStorage.getItem("verifyUser");
    const code = localStorage.getItem("verifyCode");

    if (!username || !code) {
        alert("No verification in progress");
        return window.location.href = "login.html";
    }

    const userRes = await fetch(`https://api.roblox.com/users/get-by-username?username=${username}`);
    const userData = await userRes.json();

    if (!userData.Id) return alert("User not found");

    const userId = userData.Id;

    const profileRes = await fetch(`https://users.roblox.com/v1/users/${userId}`);
    const profile = await profileRes.json();

    if (profile.description && profile.description.includes(code)) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userId", userId);
        localStorage.setItem("username", username);

        window.location.href = "dashboard.html";
    } else {
        alert("Code not found in bio. Try again.");
    }
}

checkVerification();
