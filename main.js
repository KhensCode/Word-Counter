document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("textInput");
  const charCount = document.getElementById("charCount");
  const wordCount = document.getElementById("wordCount");
  const validationMsg = document.getElementById("validationMsg");

  const update = () => {
    const text = textInput.value.trim();
    const charLength = text.replace(/\s+/g, "").length;
    const words = text === "" ? [] : text.split(/\s+/);

    charCount.textContent = charLength;
    wordCount.textContent = words.length;

    if (charLength === 0) {
      validationMsg.textContent = "Start typing to see stats";
      validationMsg.style.color = "crimson";
    } else if (charLength > 200) {
      validationMsg.textContent = "That's quite long!";
      validationMsg.style.color = "orange";
    } else {
      validationMsg.textContent = "Looks good!";
      validationMsg.style.color = "green";
    }
  };

  const autoResize = () => {
    textInput.style.height = "auto";
    textInput.style.height = textInput.scrollHeight + "px";
  };

  textInput.addEventListener("input", () => {
    update();
    autoResize();
  });
});
