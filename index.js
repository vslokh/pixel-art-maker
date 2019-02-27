const container = document.createElement('div');

container.className = "container";

const artMaker = document.createElement("div");

artMaker.className = "art-maker";

const colors = document.createElement("div");

colors.className = "colors";

const whiteBoard = document.createElement("div");

whiteBoard.className = "white-board";

let bgColor;


document.body.appendChild(container);
container.appendChild(artMaker);
artMaker.appendChild(whiteBoard);
artMaker.appendChild(colors);

const x = 55;
const y = 100;
let prevBGColor;

for (let i = 0; i < x; i++){
    let row = document.createElement('div');
    row.className = "row";
    for (let j=0;j<y;j++){
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        // pixel.onclick = () => {
        //     pixel.style.backgroundColor = bgColor;
        // }
        pixel.onmouseenter = () => {
            pixel.style.backgroundColor = prevBGColor;
        }
        pixel.onmouseup = () => {
            prevBGColor = ""
        }
        pixel.onmousedown = () => {
            prevBGColor = bgColor;
            pixel.style.backgroundColor = prevBGColor || bgColor;
        }
        row.appendChild(pixel);
    }
    whiteBoard.appendChild(row);
}

let colorsArray = ["red","orange", "yellow", "green", "blue", "purple", "brown", "gray", "black", "white", "gray",
    "lightgray", "violet"];

console.log(colorsArray);

colorsArray.forEach(color => {
    console.log(color);
    let pellet =  document.createElement('div');
    pellet.className = "pellet";
    pellet.style.backgroundColor = color;
    pellet.onclick = (e) => {
        bgColor = e.target.style.backgroundColor;
    }
    colors.appendChild(pellet);
});











