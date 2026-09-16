/* =========================
   MUSIC PLAYER
   ========================= */

const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
const progressBar = document.getElementById("progressBar");
const progressContainer = document.querySelector(".progress-container");
const volumeButton = document.getElementById("volumeButton");

const visualizerBars = document.querySelectorAll(".visualizer span");

let isPlaying = false;


/* =========================
   PLAY / PAUSE
   ========================= */

playButton.addEventListener("click", () => {

    if (isPlaying) {

        audio.pause();

        playButton.textContent = "▶";

        isPlaying = false;

    } else {

        audio.play();

        playButton.textContent = "Ⅱ";

        isPlaying = true;
    }
});


/* =========================
   ACTUALIZAR BARRA
   ========================= */

audio.addEventListener("timeupdate", () => {

    if (audio.duration) {

        const progress =
            (audio.currentTime / audio.duration) * 100;

        progressBar.style.width = `${progress}%`;
    }
});


/* =========================
   REINICIAR AL TERMINAR
   ========================= */

audio.addEventListener("ended", () => {

    isPlaying = false;

    playButton.textContent = "▶";

    progressBar.style.width = "0%";
});


/* =========================
   CAMBIAR POSICIÓN
   ========================= */

progressContainer.addEventListener("click", (event) => {

    const width = progressContainer.clientWidth;

    const clickPosition = event.offsetX;

    const percentage = clickPosition / width;

    audio.currentTime =
        percentage * audio.duration;
});


/* =========================
   VOLUMEN
   ========================= */

volumeButton.addEventListener("click", () => {

    if (audio.muted) {

        audio.muted = false;

        volumeButton.textContent = "🔊";

    } else {

        audio.muted = true;

        volumeButton.textContent = "🔇";
    }
});


/* =========================
   VISUALIZER
   ========================= */

function animateVisualizer() {

    if (isPlaying) {

        visualizerBars.forEach((bar, index) => {

            const wave =
                Math.sin(
                    Date.now() / 180 + index * 0.8
                );

            const height =
                12 + Math.abs(wave) * 35;

            bar.style.height = `${height}px`;

        });

    } else {

        visualizerBars.forEach((bar) => {

            bar.style.height = "12px";

        });
    }

    requestAnimationFrame(animateVisualizer);
}

animateVisualizer();