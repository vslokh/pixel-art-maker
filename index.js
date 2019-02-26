const container = document.createElement('div');

container.className = "container";

const artMaker = document.createElement("div");

artMaker.className = "art-maker";

const colors = document.createElement("div");

colors.className = "colors";

const whiteBoard = document.createElement("div");

whiteBoard.className = "white-board";



document.body.appendChild(container);
container.appendChild(artMaker);
artMaker.appendChild(whiteBoard);
artMaker.appendChild(colors);

const x = 55;
const y = 100;

for (let i = 0; i < x; i++){
    let row = document.createElement('div');
    row.className = "row";
    for (let j=0;j<y;j++){
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.onclick = () => {
            pixel.style.backgroundColor = "Red";
        }
        row.appendChild(pixel);
    }
    whiteBoard.appendChild(row);
}

let color = ["red","orange", "yellow", "green", "blue", "purple", "brown", "gray", "black", "white"];

const red = document.createElement('div');
red.className = "pellet";
red.style.backgroundColor = "Red";

const blue = document.createElement('div');
blue.className = "pellet";
blue.style.backgroundColor = "Blue";

colors.appendChild(red);
colors.appendChild(blue);

let color;

blue.onclick = (e) => {
    console.log(e.target.style.backgroundColor);
}










