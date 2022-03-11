const backgroundColorText = document.querySelector(".card-title");
const changeButton = document.querySelector(".btn");
const colorKeywordsArray = ["black" , "silver" , "gray" , "white" , "maroon" , "red" , "purple" , "fuchsia" , "green" , "lime" , "olive" , "yellow" , "navy" , "blue" , "teal" , "aqua" , "aliceblue" , "antiquewhite" , "aquamarine" , "azure" , "beige" , "bisque" , "blanchedalmond" , "blueviolet" , "brown" , "burlywood" , "cadetblue" , "chartreuse" , "chocolate" , "coral" , "cornflowerblue" , "cornsilk" , "crimson" , "darkblue" , "darkcyan" , "darkgoldenrod" , "darkgray" , "darkgreen" , "darkkhaki" , "darkmagenta" , "darkolivegreen" , "darkorange" , "darkorchid" , "darkred" , "darksalmon" , "darkseagreen" , "darkslateblue" , "darkslategray" , "darkturquoise" , "darkviolet" , "deeppink" , "deepskyblue" , "dimgray" , "dodgerblue" , "firebrick" , "floralwhite" , "forestgreen" , "gainsboro" , "ghostwhite" , "gold" , "goldenrod" , "greenyellow" , "honeydew" , "hotpink" , "indianred" , "indigo" , "ivory" , "lavender" , "lavenderblush" , "lawngreen" , "lemonchiffon" , "lightblue" , "lightcoral" , "lightcyan" , "lightgoldenrodyellow" , "lightgray" , "lightgreen" , "lightpink" , "lightsalmon" , "lightseagreen" , "lightskyblue" , "lightslategray" , "lightsteelblue" , "lightyellow" , "limegreen" , "linen" , "magenta" , "mediumaquamarine" , "mediumblue" , "mediumorchid" , "mediumpurple" , "mediumseagreen" , "mediumslateblue" , "mediumspringgreen" , "mediumturquoise" , "mediumvioletred" , "midnightblue" , "mintcream" , "mistyrose" , "moccasin" , "navajowhite" , "oldlace" , "orange" , "orangered" , "palegoldenrod" , "palegreen" , "paleturquoise" , "palevioletred" , "papayawhip" , "peachpuff" , "peru" , "plum" , "powderblue" , "rosybrown" , "royalblue" , "saddlebrown" , "salmon" , "sandybrown" , "seashell" , "sienna" , "skyblue" , "snow" , "tan" , "teal" , "thistle" , "tomato" , "wheat"];
const hexadecimalArray = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , "A" , "B" , "C" , "D" , "E" , "F"];

changeColor = (x) => {
    switch (x) {
        case "RGB":
            let r = randomRGB();
            let g = randomRGB();
            let b = randomRGB();
            let colorRGB = `rgb(${r} , ${g} , ${b})`;
            document.querySelector("body").style.backgroundColor = "rgb("+r+","+g+","+b+")";
            backgroundColorText.innerHTML = "Background color: " + colorRGB;
            break;
        case "HEX":
            let colorHEX = `#${hexadecimalArray[randomHEX()]}${hexadecimalArray[randomHEX()]}${hexadecimalArray[randomHEX()]}${hexadecimalArray[randomHEX()]}${hexadecimalArray[randomHEX()]}${hexadecimalArray[randomHEX()]}`;
            document.querySelector("body").style.backgroundColor = colorHEX;
            backgroundColorText.innerHTML = "Background color: " + colorHEX;  
            break;
        case "Basic":
            let colorBasic = colorKeywordsArray[randomColorKeyword()];
            document.querySelector("body").style.backgroundColor = colorBasic;
            backgroundColorText.innerHTML = "Background color: " + colorBasic;
            break;

    }
}

randomRGB = () => {return Math.floor(Math.random() * 256);};
randomColorKeyword = () => {return Math.floor(Math.random() * colorKeywordsArray.length)};
randomHEX = () => {return Math.floor(Math.random() * hexadecimalArray.length)};

const radioBasic = document.querySelectorAll(".form-check-input");
 
function getRadioValue() {
    let radioValue;
    for (const radioButton of radioBasic) {
        if (radioButton.checked) {
            radioValue = radioButton.value;
            // console.log(radioValue)
            return radioValue;
            break;
        }
    }
}
changeButton.addEventListener("click", () => {    
    changeColor(getRadioValue());
});
