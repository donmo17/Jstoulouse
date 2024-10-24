document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  const pseudo = document.getElementById("pseudo");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const passwordConfirm = document.getElementById("passwordConfirm");
  const profession = document.getElementById("profession");
  const terms = document.getElementById("terms");
  const langages = document.querySelectorAll('input[name="langage"]');
  const submitButton = document.getElementById("submitButton");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  //   const pseudoError = document.getElementById("pseudoError");
  //   const emailError = document.getElementById("emailError");
  //   const passwordError = document.getElementById("passwordError");
  //   const passwordConfirmError = document.getElementById("passwordConfirmError");
  //   const professionError = document.getElementById("professionError");
  //   const termsError = document.getElementById("termsError");
  const langageError = document.getElementById("langageError");

  const showError = (input, message) => {
    input.classList.add("error");
    input.classList.remove("success");
    input.nextElementSibling.textContent = message;
    input.nextElementSibling.style.display = "block";
    updateEmoji(input, false);
  };

  const showSuccess = (input) => {
    console.log(input);
    input.classList.add("success");
    input.classList.remove("error");
    input.nextElementSibling.textContent = "";
    input.nextElementSibling.style.display = "none";
    // Si l'input est la case à cocher, on ne cache pas le texte après
    if (input.type === "checkbox") {
      input.nextElementSibling.textContent = "J'accepte les conditions.";
      input.nextElementSibling.style.display = "block";
    }
    updateEmoji(input, true);
  };

  const updateEmoji = (input, isValid) => {
    let emoji = input.parentElement.querySelector(".form__emoji");
    if (!emoji) {
      emoji = document.createElement("span");
      emoji.classList.add("form__emoji");
      input.parentElement.appendChild(emoji);
    }
    emoji.textContent = isValid ? "✅" : "❌";
  };

  const validatePseudo = () => {
    const pseudoPattern = /^[a-zA-Z0-9]{3,}$/;
    if (!pseudoPattern.test(pseudo.value)) {
      showError(
        pseudo,
        "Le pseudo doit contenir au moins 3 caractères alphanumériques."
      );
      return false;
    } else {
      showSuccess(pseudo);
      return true;
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email.value)) {
      showError(email, "Veuillez entrer une adresse email valide.");
      return false;
    } else {
      showSuccess(email);
      return true;
    }
  };

  const validatePassword = () => {
    const passwordPattern = /^(?=.*[0-9])(?=.*[*#?!]).{6,}$/;
    if (!passwordPattern.test(password.value)) {
      showError(
        password,
        "Le mot de passe doit contenir au moins 6 caractères, un chiffre et un caractère spécial."
      );
      return false;
    } else {
      showSuccess(password);
      return true;
    }
  };

  const validatePasswordConfirm = () => {
    if (password.value !== passwordConfirm.value) {
      showError(passwordConfirm, "Les mots de passe ne correspondent pas.");
      return false;
    } else {
      showSuccess(passwordConfirm);
      return true;
    }
  };

  const validateProfession = () => {
    if (profession.value === "") {
      showError(profession, "Veuillez sélectionner une profession.");
      return false;
    } else {
      showSuccess(profession);
      return true;
    }
  };

  const validateTerms = () => {
    if (!terms.checked) {
      showError(terms, "Vous devez accepter les conditions.");
      return false;
    } else {
      showSuccess(terms);
      return true;
    }
  };

  const validateLangage = () => {
    let isChecked = false;
    langages.forEach((langage) => {
      if (langage.checked) {
        isChecked = true;
      }
    });
    if (!isChecked) {
      langageError.textContent = "Veuillez sélectionner un langage.";
      langageError.style.display = "block";
      return false;
    } else {
      langageError.textContent = "";
      langageError.style.display = "none";
      return true;
    }
  };

  const validateForm = () => {
    const isValid =
      validatePseudo() &&
      validateEmail() &&
      validatePassword() &&
      validatePasswordConfirm() &&
      validateProfession() &&
      validateTerms() &&
      validateLangage();
    // La propriété du bouton est désactivée si la constante isValid n'est pas vraie
    submitButton.disabled = !isValid;
  };

  const resetFormStyles = () => {
    const inputs = [
      pseudo,
      email,
      password,
      passwordConfirm,
      profession,
      terms,
    ];
    inputs.forEach((input) => {
      input.classList.remove("error", "success");
      let emoji = input.parentElement.querySelector(".form__emoji");
      if (emoji) {
        emoji.remove();
      }
      input.nextElementSibling.textContent = "";
      input.nextElementSibling.style.display = "none";
      // Le texte après la case à cocher doit rester apparent !!
      if (input.type === "checkbox") {
        input.nextElementSibling.textContent = "J'accepte les conditions.";
        input.nextElementSibling.style.display = "block";
      }
    });
    langages.forEach((langage) => {
      langage.classList.remove("error", "success");
      let emoji = langage.parentElement.querySelector(".form__emoji");
      if (emoji) {
        emoji.remove();
      }
      langageError.textContent = "";
      langageError.style.display = "none";
    });
  };

  /*-----------------------------------------------------
  localStorage
    -----------------------------------------------------*/
  const isEmailRegistered = (email) => {
    const users = JSON.parse(localStorage.getItem("customers")) || [];
    return users.some((user) => user.email === email);
  };

  const saveUser = (user) => {
    // On récupère la clé "customers" et si elle n'existe psa on l'associe à un tableau vide
    const users = JSON.parse(localStorage.getItem("customers")) || [];
    users.push(user);
    localStorage.setItem("customers", JSON.stringify(users));
  };

  pseudo.addEventListener("input", () => {
    validatePseudo();
    validateForm();
  });
  email.addEventListener("input", () => {
    validateEmail();
    validateForm();
  });
  password.addEventListener("input", () => {
    validatePassword();
    validateForm();
  });
  passwordConfirm.addEventListener("input", () => {
    validatePasswordConfirm();
    validateForm();
  });
  profession.addEventListener("change", () => {
    validateProfession();
    validateForm();
  });
  terms.addEventListener("change", () => {
    validateTerms();
    validateForm();
  });
  langages.forEach((langage) =>
    langage.addEventListener("change", () => {
      validateLangage();
      validateForm();
    })
  );

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (isEmailRegistered(email.value)) {
      showError(email, "Un utilisateur avec cet email est déjà enregistré.");
      errorMessage.style.display = "block";
      errorMessage.textContent = "Veuillez utiliser un autre email.";
      return;
    }

    if (
      validatePseudo() &&
      validateEmail() &&
      validatePassword() &&
      validatePasswordConfirm() &&
      validateProfession() &&
      validateTerms() &&
      validateLangage()
    ) {
      errorMessage.style.display = "none";
      successMessage.style.display = "block";
      successMessage.textContent = "Formulaire soumis avec succès !";

      // Ajout en locastorage
      const newUser = {
        pseudo: pseudo.value,
        email: email.value,
        password: password.value,
        profession: profession.value,
        langage: Array.from(langages)
          .filter((l) => l.checked)
          .map((l) => l.value),
      };

      saveUser(newUser);

      form.reset();
      langages.forEach((langage) => {
        langage.checked = false;
      });
      submitButton.disabled = true;
      resetFormStyles();

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000);
    } else {
      errorMessage.style.display = "block";
      errorMessage.textContent =
        "Veuillez remplir tous les champs correctement.";
    }
  });

  submitButton.disabled = true;
});
