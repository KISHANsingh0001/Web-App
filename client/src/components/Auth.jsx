const handleLogin = async (e) => {
  e.preventDefault();
  try {
    let response = await fetch("https://leeza.app/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    let data = await response.json(); // Parse the response JSON

    if (response.ok) {
      localStorage.setItem('email', email); // Store user info in localStorage
      localStorage.setItem('name', data.name); // Assuming the response contains the user's name
      console.log("Login successful:", data.message);
      alert("Login successful");
      navigate("/home"); // Redirect user to home page
    } else {
      console.error("Login failed:", data.message);
      alert("Login failed: " + data.message);
    }
  } catch (error) {
    console.error("Error logging in:", error.message);
    alert("Error logging in: " + error.message);
  }
};
