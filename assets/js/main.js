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
var timeBomb;
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
                bomberman.style.top = (posBlockTop + 1) * 30 + "px";
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
                bomb.style.backgroundImage = "url('assets/medias/bomb.png')";
                bomb.style.display = "block";
                time = setInterval(posTheBomb, 50);
            }
            break;
    }
});


function posTheBomb() {


    timeBomb = setInterval(exploseTheBomb, 3000);

    clearInterval(time);

}


function exploseTheBomb() {
    console.log('boum');
    bomb.style.backgroundImage = "url('assets/medias/explosion.png')";
    var posBombLeft = bomberman.offsetLeft / 30;
    var posBombTop = bomberman.offsetTop / 30;
    var bombX = bomb.offsetTop;
    var bombY = bomb.offsetLeft;


    if(grille[posBombLeft - 1][bombY] == 2){
        element.kill();
    }

    clearInterval(timeBomb);

}
/****************************************************************************************************** */


var monster = document.getElementById("monster");



function random() {
    var min = 1;
    var max = 4;
    var dir = Math.floor(Math.random() * Math.floor(max));
    var posBlockLeft = monster.offsetLeft / 30;
    var posBlockTop = monster.offsetTop / 30;
    console.log(dir);

    if(dir == 0){if (grille[posBlockTop][posBlockLeft + 1] == 1){
        monster.style.left = monster.offsetLeft + 30 + "px";}  //DROITE//
    }
    else if(dir == 1){if (grille[posBlockTop][posBlockLeft - 1] == 1) {
        monster.style.left = monster.offsetLeft - 30 + "px";} //GAUCHE//
    }
    else if(dir == 3){if (grille[posBlockTop + 1][posBlockLeft] == 1) {
        monster.style.top = monster.offsetTop + 30 + "px";} //BAS///

    }
    else if(dir == 2) {if (grille[posBlockTop - 1][posBlockLeft] == 1) {
        monster.style.top = monster.offsetTop - 30 + "px";} //HAUT//
    }}


setInterval(random,400);




/****************************************************************************************************** */