const form = document.getElementById("form");
const input = document.getElementById("input");
const containers = document.querySelectorAll(".container");
const divs = [];

const submitForm = (e) => {
  e.preventDefault();
  const newDiv = document.createElement("div");
  newDiv.classList.add("draggable");
  newDiv.textContent = input.value;
  containers[0].appendChild(newDiv);
  divs.push(newDiv);
  divs.forEach((div) => {
    div.setAttribute("draggable", "true");
    eventListeners(div);
  });
  input.value = "";
};

function eventListeners(div) {
  div.addEventListener("dragstart", () =>
    setTimeout(() => div.classList.add("dragging"), 0)
  );
  div.addEventListener("dragend", () => div.classList.remove("dragging"));
}

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => e.preventDefault());
  container.addEventListener("dragout", (e) => e.preventDefault());
  container.addEventListener("dragenter", (e) => {
    e.preventDefault();
    container.style.background = "#f4f4f4";
  });
  container.addEventListener("dragleave", (e) => {
    e.preventDefault();
    container.style.background = "#fff";
  });
  container.addEventListener("drop", (e) => {
    e.preventDefault();
    const el = document.querySelector(".dragging");
    container.style.background = "#fff";
    container.append(el);
  });
});

form.addEventListener("submit", submitForm);
