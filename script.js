var h3tags = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");


/*
console.log(h3tags);
console.log(color1);
console.log(color2);
console.log(body);
*/

setGradient();
displayColorNames();


color1.addEventListener("input", function()
{
    setGradient();
    displayColorNames();
});
color2.addEventListener("input", function()
{
    setGradient();
    displayColorNames();
});

randomButton.addEventListener("click", randomizeColors);




function setGradient()
{
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

}


function displayColorNames()
{
    var colorName1 = color1.value;
    var colorName2 = color2.value;
    h3tags.innerHTML = "background: linear-gradient(to right, " + colorName1 + "," + colorName2 + ");<br>OR<br> background:" + body.style.background + ";";
}

function randomizeColors()
{
    var randomColor1 = getRandomColor();
    var randomColor2 = getRandomColor();

    color1.value = randomColor1;
    color2.value = randomColor2;    
    setGradient();
    displayColorNames();
}

function getRandomColor()
{
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}