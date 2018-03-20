var grille = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

function afficherMap() {
    var x, y = 0;

    var map = document.getElementById('map');
    var wall;

    for (x = 0; x < 19; x++) {

        for (y = 0; y < 11; y++) {
            console.log(grille[y][x]);

            if (grille[y][x] === 2) {
                
                wall = document.createElement("div");
                wall.setAttribute("class", "wall");
                map.appendChild(wall);
                wall.style.top = y * 30 + "px";
                wall.style.left = x * 30 + "px";
                wall.style.backgroundImage = "url('assets/medias/wall.png')";
            } else if (grille[y][x] === 1) {
                
            }


        }
    }
}
afficherMap();

var bomberman = document.getElementById("bomberman");
var bomb = document.getElementById("bomb");
var posBombermanLeft = bomberman.offsetLeft;
var posBombermanTop = bomberman.offsetTop;

var up = 0;
var left = 0;
var time;
var y;

document.addEventListener("keydown", function (e) {

    var posBomberman = 0;
    var bombermanLeft = bomberman.offsetLeft;
    var bombermanTop = bomberman.offsetTop;
    var posBlockLeft = bomberman.offsetLeft / 30;
    var posBlockTop = bomberman.offsetTop / 30;

    switch (e.keyCode) {


        case 38:

            if (grille[posBlockTop - 1][posBlockLeft] == 1) {
                bomberman.style.top = (posBlockTop - 1) * 30 + "px";
            }
            break;

        case 39:
            if (grille[posBlockTop][posBlockLeft + 1] == 1) {
                bomberman.style.left = (posBlockLeft + 1) * 30 + "px";
            }
            break;

        case 40:

            if (grille[posBlockTop + 1][posBlockLeft] == 1) {
                bomberman.style.top = (posBlockTop +1 ) * 30 + "px";
            }
            break;

        case 37:
            if (grille[posBlockTop][posBlockLeft - 1] == 1) {
                bomberman.style.left = (posBlockLeft - 1) * 30 + "px";
            }
            break;

        case 32:
            if (posBomberman === 0) {
                bomb.style.left = bombermanLeft + "px";
                bomb.style.top = bombermanTop + "px";
                bomb.style.display = "block";
                time = setInterval(posTheBomb, 50);
            }
            break;
    }
});


function posTheBomb() {

    var bombX = bomb.offsetTop;
    var bombY = bomb.offsetLeft;

 

}
/****************************************************************************************************** */


var monster = document.getElementById("monster");



function random() {
    var min = 1;
    var max = 4;
    var dir = Math.floor(Math.random() * Math.floor(max));
 
    console.log(dir);

    if(dir == 0){
        monster.style.left = monster.offsetLeft + 30 + "px";
    }
    else if(dir == 1){
        monster.style.left = monster.offsetLeft - 30 + "px";
    }
    else if(dir == 3){
        monster.style.top = monster.offsetTop + 30 + "px";
    }
    else if(dir == 2) {
        monster.style.top = monster.offsetTop - 30 + "px";
    }}


setInterval(random,1000);

  


/****************************************************************************************************** */
