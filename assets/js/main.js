var grille = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
];

var audio = new Audio('assets/medias/music.mp3');
    audio.play();

function afficherMap() {
    var x, y = 0;
    var map = document.getElementById('map');
    var wall;
    var floor;
    for (x = 0; x < 14; x++) {

        for (y = 0; y < 9; y++) {
            console.log(grille[y][x]);

            if (grille[y][x] === 3){
                wall = document.createElement("div");
                wall.setAttribute("class", "wall");
                map.appendChild(wall);
                wall.style.top = y * 30 + "px";
                wall.style.left = x * 30 + "px";
                wall.style.backgroundImage = "url('assets/medias/wall.png')"; 
            }

            if (grille[y][x] === 2) {

                wall = document.createElement("div");
                wall.setAttribute("class", "wall");
                map.appendChild(wall);
                wall.style.top = y * 30 + "px";
                wall.style.left = x * 30 + "px";
                wall.style.backgroundImage = "url('assets/medias/wall-d.png')";
               
            } else if (grille[y][x] === 1) {

                floor = document.createElement("div");
                floor.setAttribute("class", "floor");
                map.appendChild(floor);
                floor.style.top = y * 30 + "px";
                floor.style.left = x * 30 + "px";
                floor.style.backgroundImage = "url('assets/medias/floor.jpg')";
            }
        }
    }
}
afficherMap();
audio.src = 'assets/medias/music.mp3';
audio.play();

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
                var audio = new Audio('assets/medias/bombdrop.wav');
                audio.play();
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
    var posBombLeft = bomb.offsetLeft / 30;
    var posBombTop = bomb.offsetTop / 30;
    var bombX = bomb.offsetTop;
    var bombY = bomb.offsetLeft;
    var audio2 = new Audio('assets/medias/bombblow.wav');
    audio2.play();

    

  


  

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
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
/********************************************************************************************************* */