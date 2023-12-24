const inputSpanList = document.querySelectorAll("span");
const inputGrp = document.querySelectorAll(".inputGrp");
let inputGrpLength = inputGrp.length;
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const conPassGrp = document.querySelector(".confirmPassword");
const conPassSpan =conPassGrp.querySelector("span");
const conPassValidation =conPassGrp.querySelector(".validation");
const signupForm = document.querySelector('form');
confirmPassword.addEventListener("keyup",checkConPass);
password.addEventListener('keyup',checkConPass);
function checkConPass()
{
    if (confirmPassword.value == '')
    {
        confirmPassword.removeAttribute("style");
        conPassSpan.removeAttribute("id");
        conPassValidation.style.opacity = '0';
    }
    else if (confirmPassword.value !="" && (confirmPassword.value != password.value))
    {
        confirmPassword.style.outline = "1px solid crimson";
        confirmPassword.style.borderRadius = '6px';
        conPassSpan.setAttribute("id", 'invalid');
        conPassValidation.style.opacity = '100%';
    }
    else if (confirmPassword.value !="" && (confirmPassword.value == password.value) && password.checkValidity())
    {
        confirmPassword.style.outline = "1px solid var(--dusky-green)";
        confirmPassword.style.borderRadius = '6px';
        conPassSpan.setAttribute("id",'valid');
        conPassValidation.style.opacity = '0';
    }
}
function checkConPassSubmit()
{
    if (confirmPassword.value !="" && (confirmPassword.value != password.value))
    {
        confirmPassword.focus();
        return false;
    }
}


