score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');

setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        pika = document.querySelector('.pika');
        pika.classList.add('animatepika');
        setTimeout(() => {
            pika.classList.remove('animatepika')
        }, 700);
    }
    if (e.keyCode == 39) {
        pika = document.querySelector('.pika');
        pikaX = parseInt(window.getComputedStyle(pika, null).getPropertyValue('left'));
        pika.style.left = pikaX + 112 + "px";
    }
    if (e.keyCode == 37) {
        pika = document.querySelector('.pika');
        pikaX = parseInt(window.getComputedStyle(pika, null).getPropertyValue('left'));
        pika.style.left = (pikaX - 112) + "px";
    }
}

setInterval(() => {
    pika = document.querySelector('.pika');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    px = parseInt(window.getComputedStyle(pika, null).getPropertyValue('left'));
    py = parseInt(window.getComputedStyle(pika, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(px - ox);
    offsetY = Math.abs(py - oy);

    if (offsetX < 73 & offsetY < 52) {
        console.log(offsetX, offsetY);
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleani');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newdur = anidur - 0.1;
            obstacle.style.animationDuration = newdur + 's';
        }, 500);

    }

}, 10);

function updatescore(score) {
    scorecount.innerHTML = "Your Score:" + score;
}