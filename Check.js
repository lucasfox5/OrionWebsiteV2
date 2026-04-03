async function checkVerification() {
    const username = localStorage.getItem("verifyUser");
    const code = localStorage.getItem("verifyCode");

    if (!username || !code) return alert("No verification in progress");

    // Get userId
    const userRes = await fetch(`https://api.roblox.com/users/get-by-username?username=${username}`);
    const userData = await userRes.json();

    if (!userData.Id) return alert("User not found");

    const userId = userData.Id;

    // Get profile info
    const profileRes = await fetch(`https://users.roblox.com/v1/users/${userId}`);
    const profile = await profileRes.json();

    if (profile.description.includes(code)) {
        // Success
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userId", userId);
        localStorage.setItem("username", username);
        window.location.href = "/dashboard.html";
    } else {
        alert("Code not found in bio. Try again.");
    }
}

checkVerification();
