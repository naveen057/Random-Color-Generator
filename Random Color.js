let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b", "#1ABC9C", // Turquoise
    "#F39C12", // Sunflower
    "#D35400", // Pumpkin
    "#C0392B", // Pomegranate
    "#2980B9", // Belize Hole
    "#2ECC71", // Emerald
    "#34495E", // Wet Asphalt
    "#7F8C8D", // Concrete Grey
    "#16A085", // Greenish Teal
    "#F1C40F", // Bright Yellow
    "#E67E22", // Carrot Orange
    "#EC407A", // Vivid Pink
    "#BA68C8", // Soft Purple
    "#4DD0E1", // Light Cyan
    "#AED581"
];

function changeColor() {
    let num = Math.ceil(Math.random() * bgColorsArray.length - 1);
    let color = bgColorsArray[num];
    let divElement = document.getElementById('bgContainer');
    divElement.style.backgroundColor = color;
    console.log(color);
}