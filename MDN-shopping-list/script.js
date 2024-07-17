const ul = document.querySelector("ul");
const input = document.querySelector("#item");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    let currVal = input.value;
    input.value = "";

    const li = document.createElement("li");
    const span = document.createElement("span");
    const buttonTwo = document.createElement("button");

    li.appendChild(span);
    span.textContent = currVal;
    li.appendChild(buttonTwo);
    buttonTwo.textContent = "Delete";

    ul.appendChild(li);

    buttonTwo.addEventListener("click", () => {
        ul.removeChild(li);
    });

    input.focus();
    
});

