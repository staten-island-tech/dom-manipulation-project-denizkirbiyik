function clearInput() {
  document.getElementById("prompt").value = "";
}

function addElement(prompt) {
  const parent = document.getElementById("container");
  const child = document.createElement("div");
  child.classList.add("child");
  child.textContent = prompt;
  parent.appendChild(child);
}

function onClick() {
  const prompt = document.getElementById("prompt").value;
  console.log(prompt);
  clearInput();
  addElement(prompt);
}
