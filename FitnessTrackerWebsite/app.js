// Logout
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

// Section switching
function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((s) => s.style.display = "none");
  document.getElementById(sectionId).style.display = "block";
}

// Save user profile
function saveProfile() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const goal = document.getElementById("goal").value;

  if (!name || !age || !weight || !goal) {
    document.getElementById("profileMessage").innerText = "⚠️ Please fill all fields.";
    return;
  }

  const profile = { name, age, weight, goal };
  localStorage.setItem("userProfile", JSON.stringify(profile));
  document.getElementById("profileMessage").innerText = "✅ Profile saved successfully!";
}

// Add a community post
function addPost() {
  const postContent = document.getElementById("newPost").value.trim();
  if (!postContent) return;

  const postDiv = document.createElement("div");
  postDiv.innerHTML = `<p>${postContent}</p><hr/>`;
  document.getElementById("posts").prepend(postDiv);
  document.getElementById("newPost").value = "";
}

// Send friend request
function sendRequest(name) {
  document.getElementById("friendMessage").innerText = `✅ Friend request sent to ${name}`;
}

