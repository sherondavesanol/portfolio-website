const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuLogo = document.getElementById("mobile-menu-logo");
const mobileLink = document.querySelectorAll("#mobile-link");

const toggleMobileMenu = () => {

    mobileMenu.classList.toggle("active");
    mobileMenuLogo.classList.toggle("fa-times");
};

window.addEventListener('scroll', () => {

    if (mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
        mobileMenuLogo.classList.remove("fa-times");
    }
});
    

// Form Handler
const form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
    status.innerHTML = "Thanks for reaching out! I'll get back to you soon.";
    form.reset()
    
    setTimeout(() => {status.innerHTML = ''}, 3000)
    }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form."
    });
}
form.addEventListener("submit", handleSubmit)