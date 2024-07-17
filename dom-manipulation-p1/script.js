const container = document.querySelector("#container");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

container.appendChild(p);

const hThree = document.createElement("h3");
hThree.textContent = "I'm a blue h3!";
hThree.style.color = "blue";

container.appendChild(hThree);


