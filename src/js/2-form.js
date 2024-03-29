const storageKey = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textEmail = document.querySelector(".email-input")
const textarea = form.querySelector(".message");



form.addEventListener("submit", handleSubmit);
form.addEventListener("input", onInput);


function onInput(event) {
    const save = {
        email: form.email.value.trim(),
        message: form.message.value.trim(),
    };
    localStorage.setItem(storageKey, JSON.stringify(save));
   
}

const savedMessage = localStorage.getItem(storageKey);

if (savedMessage) {
    const { email, message } = JSON.parse(savedMessage);
    form.email.value = email;
    form.message.value = message;
}

function handleSubmit(event) {
    event.preventDefault();

    if (form.email.value === "" || form.message.value === "") {
        alert("Усі поля форми мають бути заповнені");
        console.log("Error");
    } else {
    console.log("send");
    console.log(localStorage.getItem(storageKey));
    event.currentTarget.reset();
    localStorage.removeItem(storageKey);}
}
