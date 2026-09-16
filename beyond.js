/* =========================================================
   BEYOND THE CV — ENTRY
   ========================================================= */


/* =========================================================
   ELEMENTS
   ========================================================= */

const universe = document.querySelector(".universe");

const activationScreen =
    document.querySelector(".activation-screen");

const universeContent =
    document.querySelector(".universe-content");

const planet =
    document.querySelector(".planet");


/* =========================================================
   ENTRY SOUND
   ========================================================= */

const entrySound =
    new Audio("assets/space-entry.mp3");


/* =========================================================
   INITIAL STATE
   ========================================================= */

activationScreen.style.animation = "none";

universeContent.style.animation = "none";

planet.style.animation = "none";


activationScreen.style.opacity = "1";

activationScreen.style.visibility = "visible";


universeContent.style.opacity = "0";

planet.style.opacity = "0";


/* =========================================================
   SOUND
   ========================================================= */

entrySound.volume = 0.8;

entrySound.play().catch(() => {

    console.log(
        "Entry sound could not autoplay."
    );

});


/* =========================================================
   UNIVERSE ACTIVATION
   ========================================================= */

setTimeout(() => {


    /* Activation screen */

    activationScreen.style.animation =
        "activationFade 0.8s ease forwards";


    /* Main content */

    universeContent.style.animation =
        "universeAppear 1.5s ease forwards";


    /* Planet */

    planet.style.animation =
        "planetAppear 1.8s ease forwards";


    /* =====================================================
       COSMIC CURSOR
       ===================================================== */

    if (window.innerWidth > 600) {

        const cursor =
            document.createElement("div");

        cursor.classList.add(
            "cosmic-cursor"
        );

        document.body.appendChild(cursor);


        document.addEventListener(
            "mousemove",
            (event) => {

                const mouseX =
                    event.clientX;

                const mouseY =
                    event.clientY;


                /* Main cursor */

                cursor.style.left =
                    `${mouseX}px`;

                cursor.style.top =
                    `${mouseY}px`;


                /* Trail */

                const trail =
                    document.createElement("div");

                trail.classList.add(
                    "cosmic-trail"
                );

                trail.style.left =
                    `${mouseX}px`;

                trail.style.top =
                    `${mouseY}px`;


                document.body.appendChild(
                    trail
                );


                setTimeout(() => {

                    trail.remove();

                }, 700);

            }
        );

    }

}, 3000);


console.log(
    "BEYOND.JS IS WORKING"
);