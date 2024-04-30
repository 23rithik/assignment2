
        function validateForm() {
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var password = document.getElementById("password").value;

            // Email validation
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Invalid email address");
                return false;
            }

            // Phone number validation
            var phoneRegex = /^[0-9]{3}[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/;
            if (!phoneRegex.test(phone)) {
                alert("Invalid phone number");
                return false;
            }

            // Password validation
            var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (!passwordRegex.test(password)) {
                alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number");
                return false;
            }

            return alert("Registration successful");
        }

        function checkPasswordStrength(password) {
            var passwordStrength = document.getElementById("password-strength");
            var strengthText = "";

            if (password.length < 8) {
                strengthText = "Weak";
                passwordStrength.className = "weak";
            } else if (password.length < 12) {
                strengthText = "Medium";
                passwordStrength.className = "medium";
            } else {
                strengthText = "Strong";
                passwordStrength.className = "strong";
            }

            passwordStrength.textContent = "Password Strength: " + strengthText;
        }
