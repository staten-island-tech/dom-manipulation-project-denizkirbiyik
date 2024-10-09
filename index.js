const DOMSelectors = {
  parentdiv: document.querySelector(".parent"),
  submitButton: document.querySelector("button"),
  title: document.querySelector("#title"),
  desc: document.querySelector("#desc"),
};

function clearInput() {
  DOMSelectors.title.value = "";
  DOMSelectors.desc.value = "";
}

function removePrompt(num) {
  DOMSelectors.parentdiv.removeChild(`p${num}`);
}

function addElement(num) {
  DOMSelectors.parentdiv.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="p${num}"><h4>${DOMSelectors.title.value}</h4><p>${DOMSelectors.desc.value}</p><button id="b${num}">Delete</button></div>`
  );
  document
    .querySelector(`#b${num}`)
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(`#p${num}`).remove();
    });
}

function run() {
  let n = 0;
  DOMSelectors.submitButton.addEventListener("click", function (event) {
    if (!(DOMSelectors.title.value === "" || DOMSelectors.desc.value === "")) {
      event.preventDefault();
      addElement(n);
      clearInput();
      n += 1;
    }
  });
  [title, desc].forEach((input) => {
    input.addEventListener("keypress", function (event) {
      if (
        !(DOMSelectors.title.value === "" || DOMSelectors.desc.value === "") &
        (event.key === "Enter")
      ) {
        event.preventDefault();
        addElement(n);
        clearInput();
        n += 1;
      }
    });
  });
}

run();
