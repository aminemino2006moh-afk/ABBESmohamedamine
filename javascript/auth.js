let users = JSON.parse(localStorage.getItem("users")) || [
    { id: 1, nom: "Admin", prenom: "System", email: "admin@test.com", password: "Admin123" }
];

function saveUsers() {
    localStorage.setItem("users", JSON.stringify(users));
}

const nameRegex = /^[A-Za-z\u0600-\u06FF]{3,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

const signupForm = document.getElementById("signup-form");
if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const prenom = document.getElementById("prenom").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            return alert("Les mots de passe ne correspondent pas !");
        }
        if (!nameRegex.test(nom) || !nameRegex.test(prenom)) {
            return alert("Le nom et le prénom doivent contenir entre 3 et 20 caractères.");
        }
        if (!emailRegex.test(email)) {
            return alert("Adresse email invalide.");
        }
        if (!passwordRegex.test(password)) {
            return alert("Mot de passe invalide : min 8 caractères, 1 Majuscule et 1 chiffre.");
        }
        if (users.find(u => u.email === email)) {
            return alert("Cet email est déjà enregistré.");
        }

        users.push({ id: Date.now(), nom, prenom, email, password });
        saveUsers();
        
        alert("Inscription réussie !");
        window.location.href = "connexion.html";
    });
}

const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            alert("Bienvenue " + user.prenom);
            window.location.href = "../conntent/produit.html";
        } else {
            alert("Email ou mot de passe incorrect.");
        }
    });
}