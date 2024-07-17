const container = document.querySelector("#container");



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

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    alert("Hello World");
});
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
})

// const pinkDiv = document.createElement("div");
// pinkDiv.classList.add("pinkDiv");
// pinkDiv.style.backgroundColor = "pink";
// pinkDiv.style.borderColor = "black";

// const hOne = document.createElement("h1");
// hOne.textContent("I'm in a div");
// pinkDiv.appendChild(hOne);

// container.appendChild(pinkDiv);


