const map = document.getElementById('map');
const bomberman = document.getElementById("bomberman");
const bomb = document.getElementById("bomb");
const monster = document.getElementById("monster");
const wallDestruct = document.getElementsByClassName("wall-destruct");
const posBombermanLeft = bomberman.offsetLeft;
const posBombermanTop = bomberman.offsetTop;

var audio = new Audio('assets/medias/music.mp3');
var up = 0;
var left = 0;
var time;
var timeBomb;
var y;
var lifecount = 3;

var grille = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 3, 1, 2, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 3, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3],
    [3, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3],
    [3, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
];

audio.play();

function afficherMap() {

    var x, y = 0;
    var wall;
    var wallDestruct;
    var floor;

    for (x = 0; x < 14; x++) {

        for (y = 0; y < 10; y++) {

            if (grille[y][x] === 3) {
                wall = document.createElement("div");
                wall.setAttribute("class", "wall");
                map.appendChild(wall);
                wall.style.top = y * 50 + "px";
                wall.style.left = x * 50 + "px";
                wall.style.backgroundImage = "url('assets/medias/wall.svg')";
            }

            if (grille[y][x] === 2) {

                wallDestruct = document.createElement("div");
                wallDestruct.setAttribute("class", "wall-destruct");
                map.appendChild(wallDestruct);
                wallDestruct.style.top = y * 50 + "px";
                wallDestruct.style.left = x * 50 + "px";
                wallDestruct.style.backgroundImage = "url('assets/medias/wall-d.svg')";



            } else if (grille[y][x] === 1) {

                floor = document.createElement("div");
                floor.setAttribute("class", "floor");
                map.appendChild(floor);
                floor.style.top = y * 50 + "px";
                floor.style.left = x * 50 + "px";
                floor.style.backgroundImage = "url('assets/medias/floor.svg')";
            }
        }
    }
}

afficherMap();

audio.src = 'assets/medias/music.mp3';
audio.play();

document.addEventListener("keydown", function (e) {

    var posBomberman = 0;
    var bombermanLeft = bomberman.offsetLeft;
    var bombermanTop = bomberman.offsetTop;
    var posBlockLeft = bomberman.offsetLeft / 50;
    var posBlockTop = bomberman.offsetTop / 50;

    switch (e.keyCode) {

        case 38:

            if (grille[posBlockTop - 1][posBlockLeft] == 1) {
                bomberman.style.top = (posBlockTop - 1) * 50 + "px";
                bomberman.style.backgroundImage = "url('./assets/medias/bombermanup.svg')";
            }
            break;

        case 39:
            if (grille[posBlockTop][posBlockLeft + 1] == 1) {
                bomberman.style.left = (posBlockLeft + 1) * 50 + "px";
                bomberman.style.backgroundImage = "url('./assets/medias/bombermanright.svg')";
            }
            break;

        case 40:

            if (grille[posBlockTop + 1][posBlockLeft] == 1) {
                bomberman.style.top = (posBlockTop + 1) * 50 + "px";
                bomberman.style.backgroundImage = "url('./assets/medias/bomberman.svg')";
            }
            break;

        case 37:
            if (grille[posBlockTop][posBlockLeft - 1] == 1) {
                bomberman.style.left = (posBlockLeft - 1) * 50 + "px";
                bomberman.style.backgroundImage = "url('./assets/medias/bombermanleft.svg')";
            }
            break;

        case 32:
            if (posBomberman === 0) {
                bomb.style.left = bombermanLeft + "px";
                bomb.style.top = bombermanTop + "px";
                bomb.style.backgroundImage = "url('assets/medias/bomb.svg')";
                bomb.style.display = "block";

                var audio = new Audio('assets/medias/bombdrop.wav');
                audio.play();

                setTimeout(exploseTheBomb, 3000);
                setTimeout(suppexplosion, 4000);

            }
            break;
    }
});

function suppexplosion() {

    bomb.style.display = "none";
    var element = document.getElementsByClassName('explosion');

    for (var i = element.length - 1; i >= 0; i--) {
        element[i].parentElement.removeChild(element[i]);
    }

}

function exploseTheBomb(wallDestruct) {

    var posBombLeft = bomb.offsetLeft / 50;
    var posBombTop = bomb.offsetTop / 50;
    var x, y = 0;
    var explosion;
    var audio2 = new Audio('assets/medias/bombblow.wav');

    var posMonsterLeft = monster.offsetLeft / 50;
    var posMonsterTop = monster.offsetTop / 50;

    /*    var explodLeft = bomb.offsetLeft;
       var explodRight = bomb.offsetTop; */

    audio2.play();

    if (grille[posBombTop - 1][posBombLeft] == 2 || grille[posBombTop - 1][posBombLeft] == 1) {

        explosion = document.createElement("div");
        explosion.setAttribute("class", "explosion");
        map.appendChild(explosion);
        explosion.style.top = (posBombTop - 1) * 50 + "px";
        explosion.style.left = posBombLeft * 50 + "px";
        bomb.style.backgroundImage = "url('assets/medias/explosion.svg')";
        explosion.style.backgroundImage = "url('assets/medias/explosion.svg')";

        breakMonster(explosion);
        breakBlock(explosion);
    }

    if (grille[posBombTop + 1][posBombLeft] == 2 || grille[posBombTop + 1][posBombLeft] == 1) {

        explosion = document.createElement("div");
        explosion.setAttribute("class", "explosion");
        map.appendChild(explosion);
        explosion.style.top = (posBombTop + 1) * 50 + "px";
        explosion.style.left = posBombLeft * 50 + "px";
        bomb.style.backgroundImage = "url('assets/medias/explosion.svg')";
        explosion.style.backgroundImage = "url('assets/medias/explosion.svg')";
        breakMonster(explosion);
        breakBlock(explosion);
    }

    if (grille[posBombTop][posBombLeft + 1] == 2 || grille[posBombTop][posBombLeft + 1] == 1) {

        explosion = document.createElement("div");
        explosion.setAttribute("class", "explosion");
        map.appendChild(explosion);
        explosion.style.top = posBombTop * 50 + "px";
        explosion.style.left = (posBombLeft + 1) * 50 + "px";
        bomb.style.backgroundImage = "url('assets/medias/explosion.svg')";
        explosion.style.backgroundImage = "url('assets/medias/explosion.svg')";
        breakMonster(explosion);
        breakBlock(explosion);
    }

    if (grille[posBombTop][posBombLeft - 1] == 2 || grille[posBombTop][posBombLeft - 1] == 1) {

        explosion = document.createElement("div");
        explosion.setAttribute("class", "explosion");
        map.appendChild(explosion);
        explosion.style.top = posBombTop * 50 + "px";
        explosion.style.left = (posBombLeft - 1) * 50 + "px";
        bomb.style.backgroundImage = "url('assets/medias/explosion.svg')";
        explosion.style.backgroundImage = "url('assets/medias/explosion.svg')";
        breakMonster(explosion);
        breakBlock(explosion);


    } else {
        bomb.style.backgroundImage = "url('assets/medias/explosion.svg')";

    }
}


function breakMonster(explosion) {
    var posMonsterLeft = monster.offsetLeft;
    var posMonsterTop = monster.offsetTop;
    var posBombLeft = bomb.offsetLeft;
    var posBombTop = bomb.offsetTop;
    var explosionLeft = explosion.offsetLeft;
    var audio3 = new Audio('assets/medias/enemydie.wav');


    var element = document.getElementsByClassName('explosion');
    for (var i = element.length - 1; i >= 0; i--) {

        if ((posBombLeft === posMonsterLeft) && (posBombTop === posMonsterTop)) {

            monster.style.display = "none";
            audio3.play();

        } else if ((explosion.offsetTop === posMonsterTop) && (explosion.offsetLeft === posMonsterLeft)) {

            monster.style.display = "none";


        }
    }
}

function breakBlock(explosion) {


    var element = document.getElementsByClassName('wall-destruct');
    var wallDestructLeft = 0;
    var wallDestructTop = 0;

    for (var i = element.length - 1; i >= 0; i--) {

        wallDestructLeft = element[i].offsetLeft / 50;
        wallDestructTop = element[i].offsetTop / 50;

        console.log(explosion.offsetTop);

        if ((explosion.offsetTop / 50 == wallDestructTop) && (explosion.offsetLeft / 50 == wallDestructLeft)) {

            element[i].style.backgroundImage = "url('assets/medias/floor.svg')";
                console.log(explosion.offsetTop);
                console.log(wallDestructTop);

              if (grille[wallDestructTop][wallDestructLeft] == 2) {
                grille[wallDestructTop][wallDestructLeft] = 1;
                afficherMap();
            } 

        }
    }
}

/****************************************************************************************************** */




function random() {
    var min = 1;
    var max = 4;
    var dir = Math.floor(Math.random() * Math.floor(max));
    var posBlockLeft = monster.offsetLeft / 50;
    var posBlockTop = monster.offsetTop / 50;

    if (dir == 0) {
        if (grille[posBlockTop][posBlockLeft + 1] == 1) {
            monster.style.left = monster.offsetLeft + 50 + "px";
            monster.style.backgroundImage = "url('./assets/medias/monsterright.svg')";

        } //DROITE//
    } else if (dir == 1) {
        if (grille[posBlockTop][posBlockLeft - 1] == 1) {
            monster.style.left = monster.offsetLeft - 50 + "px";
            monster.style.backgroundImage = "url('./assets/medias/monsterleft.svg')";


        } //GAUCHE//
    } else if (dir == 3) {
        if (grille[posBlockTop + 1][posBlockLeft] == 1) {
            monster.style.top = monster.offsetTop + 50 + "px";
            monster.style.backgroundImage = "url('./assets/medias/monsterdown.svg')";
        } //BAS///

    } else if (dir == 2) {
        if (grille[posBlockTop - 1][posBlockLeft] == 1) {
            monster.style.top = monster.offsetTop - 50 + "px";
            monster.style.backgroundImage = "url('./assets/medias/monsterup.svg')";
        } //HAUT//
    }
}


setInterval(random, 200);




/****************************************************************************************************** */
function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    refreshIntervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {

            gameover.style.display = "block";
            clearInterval(refreshIntervalId);
            //timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5;
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
/********************************************************************************************************* */