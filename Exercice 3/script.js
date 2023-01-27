const myElement = document.getElementById("p1");
myElement.addEventListener("click", (event) =>{
    myElement.classList.add("red-class");
    myElement.innerHTML = "MERCI DE M'AVOIR CLIQUÉ";
});