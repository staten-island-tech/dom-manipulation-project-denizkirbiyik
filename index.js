function clearInput() {
  document.getElementById("prompt").value = "";
}

function removePrompt(num) {
  const parent = document.getElementById("parent");
  parent.removeChild(`p${num}`);
}

function addElement(prompt) {
  const parent = document.getElementById("parent");
  const child = document.createElement("div");
  child.classList.add("child");
  child.id = `p${parent.childElementCount}`;
  child.textContent = `${prompt} `;
  const remove = document.createElement("BUTTON");
  remove.textContent = "Remove";
  remove.onclick = function () {
    parent.removeChild(child);
  };
  child.append(remove);
  parent.appendChild(child);
}

function onClick() {
  const prompt = document.getElementById("prompt").value;
  clearInput();
  addElement(prompt);
}
