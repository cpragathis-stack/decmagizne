document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const msg = document.getElementById("msg");

      if (!name || !email || !password) {
        msg.textContent = "⚠️ Please fill in all fields!";
        msg.style.color = "red";
        return;
      }

      const emailPattern = /\S+@\S+\.\S+/;
      if (!emailPattern.test(email)) {
        msg.textContent = "⚠️ Enter a valid email address!";
        msg.style.color = "red";
        return;
      }

      if (password.length < 6) {
        msg.textContent = "⚠️ Password must be at least 6 characters!";
        msg.style.color = "red";
        return;
      }

      msg.textContent = "✅ Registration successful!";
      msg.style.color = "green";
      form.reset();
    });
  }
});
