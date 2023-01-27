const myElement = document.getElementById("button");
myElement.addEventListener("click", (event) =>{
    const mots = document.querySelectorAll("#list li");
    mots.forEach((item) => {
        item.classList.toggle("red-class");
    });
});