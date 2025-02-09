const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");
const charRemaining = document.getElementById("charRemaining");
const warningMessage = document.getElementById("warningMessage");
const maxLength = 200;

textarea.addEventListener("input", () => {
    let text = textarea.value;
    let length = text.length;

    if (length > maxLength) {
        textarea.value = text.substring(0, maxLength)
        length = maxLength;
        warningMessage.style.display = "block"
    } else {
        warningMessage.style.display = "none"
    }

    charCount.textContent = length
    charRemaining.textContent = maxLength - length
});
