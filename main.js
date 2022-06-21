const mainContent = document.querySelector(".container-content");
const feedbackContent = document.querySelector(".feedback-container");
const ratingText = document.querySelector(".selected-info");

const rdBtn = document.querySelectorAll(".rd-btn");
const submitButton = document.querySelector(".submit-btn");
var rating = 0;

function clearAllActiveBtn() {
    rdBtn.forEach(btn => btn.classList.remove("active"));
}

function selectActiveBtn(e) {
    clearAllActiveBtn();
    this.classList.add("active");
    rating = Number(this.innerText);
}

function setSubmitBtnText() {
    submitButton.innerText = "SUBMIT";
    submitButton.classList.remove("shake");
}

rdBtn.forEach(btn => btn.addEventListener("click", selectActiveBtn));

submitButton.addEventListener("click", function () {
    if (rating == 0) {
        submitButton.innerText = "PLEASE RATE US!";
        submitButton.classList.add("shake");
        setTimeout(setSubmitBtnText, 1100);
        return;
    }
    feedbackContent.classList.toggle("unshown");
    mainContent.classList.toggle("unshown");
    ratingText.innerText = "You selected " + rating + " out of 5";
});