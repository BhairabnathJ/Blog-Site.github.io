const contactForm = document.querySelector(".contact-form");

contactForm.addEventListner('submit', (e)=>{
    e.preventDefault();
    console.log("submit clicked");
});