// First name
// Last name
// Email
// Password
// Confirm password
// и секако на крај да има Register копче кое што при клик доколку корисникот ги пополнил сите полиња и доколку password и confirm passwоrd полињата имаат иста вредност, во пребарувачот со помош на alert методот да се испише пораката: “Registration Successful!” заедно со името презимето и самиот e-mail. Доколку вредностите на овие две полиња не се совпаѓаат, да се испише пораката: “Passwords do not match. Please try again.” JavaScript кодот треба да биде напишан во посебен фајл. Дополнително: Формата да се стилизира минимално со CSS чиј што код треба да биде дефиниран во посебен фајл.
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function inputValues() {
  if (
    password.value === confirmPassword.value &&
    password.value.length >= 3 &&
    firstName.value.length != 0 &&
    lastName.value.length != 0 &&
    email.value.length != 0
  ) {
    alert(
      `Registration Successful, Thank You ${firstName.value} ${lastName.value} with email: ${email.value}`
    );
  } else if (password.value !== confirmPassword.value) {
    alert("Passwords do not match. Please try again.");
  } else {
    alert("Please fill the form");
  }
}

const button = document
  .getElementById("registerButton")
  .addEventListener("click", inputValues);
