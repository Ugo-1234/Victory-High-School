// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const pw = document.getElementById('password').value;
      const cpw = document.getElementById('confirmPassword').value;
      if (pw !== cpw) {
        alert('Passwords do not match');
        return;
      }
      // Simple demo: store user in localStorage (replace with server call later)
      const user = {
        fullname: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        role: document.getElementById('role').value,
      };
      localStorage.setItem('user:' + user.email, JSON.stringify(user));
      alert('Registered successfully (demo).');
      window.location.href = 'login.html';
    });
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      // demo: check localStorage
      const userJson = localStorage.getItem('user:' + email);
      if (!userJson) {
        alert('No user found (demo). Please register first.');
        return;
      }
      alert('Logged in (demo).');
      // redirect to dashboard/student.html (choose based on role in real app)
      window.location.href = 'dashboard/student.html';
    });
  }
});
// ...existing code...