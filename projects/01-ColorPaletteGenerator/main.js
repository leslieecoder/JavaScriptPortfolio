
const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");
const maxPaletteBoxes = 8;


const generatePalette = () => {
    container.innerHTML = "";

    for (let i = 0; i < maxPaletteBoxes; i++) {

    //generate a random hex color code
    let randomHex = Math.floor(Math.random()* 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`

    //creating a new 'li' element and in serting it to the container
    
    const color = document.createElement("li");
    color.classList.add("color")
    color.innerHTML = `  
    <li class="color">
    <div class="rect-box" style= "background: ${randomHex}"></div>
    <span class="hexvalue">${randomHex}</span>
    </li>

`
const copyColor = ( hexValue ) => {
    const colorElement = document.querySelector('.hex-value');
    navigator.clipboard.writeText(hexValue).then(() => {
    colorElement.innerText = "Copied!";
    setTimeout(() => colorElement.innerText = hexValue , 1000);

})
} 
color.addEventListener('click', copyColor(color, randomHex))
container.appendChild(color)
    }
}


generatePalette()



refreshBtn.addEventListener("click", generatePalette)