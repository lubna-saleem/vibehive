// Sign In / Sign Up Logic
document.addEventListener("DOMContentLoaded", () => {
  const signInBtn = document.getElementById("signInBtn");
  const signUpBtn = document.getElementById("signUpBtn");
  const authForm = document.getElementById("authForm");

  if (authForm) {
    signInBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const savedEmail = localStorage.getItem("userEmail");
      const savedPassword = localStorage.getItem("userPassword");

      if (email === savedEmail && password === savedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "survey.html";
      } else {
        alert("Incorrect email or password.");
      }
    });

    signUpBtn.addEventListener("click", () => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      localStorage.setItem("isLoggedIn", "true");
      alert("Account created! Redirecting...");
      window.location.href = "survey.html";
    });
  }

  // Redirect if already logged in and clicks "Get Started"
  const getStartedBtn = document.getElementById("getStartedBtn");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", (e) => {
      if (localStorage.getItem("isLoggedIn") === "true") {
        e.preventDefault();
        window.location.href = "survey.html";
      }
    });
  }
});

// Survey form logic
document.addEventListener("DOMContentLoaded", () => {
  const surveyForm = document.getElementById("surveyForm");

  if (surveyForm) {
    surveyForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const surveyData = {
        origin: document.getElementById("origin").value,
        languages: document.getElementById("languages").value,
        culture: document.getElementById("culture").value,
        kids: document.getElementById("kids").value,
        location: document.getElementById("location").value,
        groupchat: document.getElementById("groupchat").value,
        buying: document.getElementById("buying").value,
      };

      // Save to localStorage (for now)
      localStorage.setItem("surveyData", JSON.stringify(surveyData));

      // Redirect to family invitation page (you'll build next)
      window.location.href = "invite-family.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const inviteForm = document.getElementById("inviteForm");
  const connectForm = document.getElementById("connectForm");

  if (inviteForm) {
    inviteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("invite-email").value;
      alert(`Invitation sent to ${email}. They’ll get an email to join VibeHive.`);
      inviteForm.reset();
    });
  }

  if (connectForm) {
    connectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const existingEmail = document.getElementById("existing-email").value;
      alert(`Family request sent to ${existingEmail}. Once they accept, you'll be connected.`);
      connectForm.reset();
    });
  }
});

// Route to homepage
function goToHome() {
  window.location.href = "home.html"; // Replace with actual homepage filename
}
