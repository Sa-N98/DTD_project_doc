const milestone1Button = document.getElementById("milestone-1");
const milestone2Button  = document.getElementById("milestone-2");
const milestone3Button = document.getElementById("milestone-3");

const milestone1Details = document.getElementById("milestone-1-details");
const milestone2Details = document.getElementById("milestone-2-details");
const milestone3Details = document.getElementById("milestone-3-details");

milestone1Button.addEventListener("click", () => {
    milestone1Details.scrollIntoView({ behavior: "smooth", block: "start" });
});

milestone2Button.addEventListener("click", () => {
    milestone2Details.scrollIntoView({ behavior: "smooth", block: "start" });
});

milestone3Button.addEventListener("click", () => {
    milestone3Details.scrollIntoView({ behavior: "smooth", block: "start" });
});