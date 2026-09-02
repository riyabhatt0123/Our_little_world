/* ============================= */
/* BIRTHDAY WEBSITE JAVASCRIPT */
/* ============================= */


/* ============================= */
/* ANNIVERSARY LOGIN */
/* ============================= */

function checkLogin() {

    const dateInput = document.getElementById("anniversary-date");
    const errorMessage = document.getElementById("error-message");

    // Get the date entered by him
    let enteredDate = dateInput.value.trim();

    // Remove spaces
    enteredDate = enteredDate.replace(/\s/g, "");

    // Allow / or - between dates
    enteredDate = enteredDate.replace(/-/g, "/");

    // ==========================================
    // TEST DATE
    // ==========================================

    const correctDate = "01/01/2023"


    // ==========================================
    // CHECK THE DATE
    // ==========================================

    if (enteredDate === correctDate) {

        errorMessage.innerHTML =
            "✨ Access granted... Welcome home ❤️";

        const button =
            document.querySelector(".welcome-card button");

        button.disabled = true;

        setTimeout(function () {

            document.getElementById("welcome-screen").style.display = "none";

            document.getElementById("main-content").style.display = "block";

        }, 1000);

    }

    else {

        errorMessage.innerHTML =
            "Hmm... that's not our date. Try again, Mr. Khadus 😂❤️";

    }
}


/* ============================= */
/* WORLD SECTION NAVIGATION */
/* ============================= */

function openSection(section) {

    document.getElementById("main-content")
        .style.display = "none";


    if (section === "story") {

        document.getElementById("story-section")
            .style.display = "block";

    }


    else if (section === "memory-lane") {

        document.getElementById("memory-lane")
            .style.display = "block";

    }


    else if (section === "khadus") {

        document.getElementById("khadus-files")
            .style.display = "block";

    }


    else if (section === "letter") {

    document.getElementById("letter-section")
        .style.display = "block";


    }

}
   

function goBack() {

    document.getElementById("story-section")
        .style.display = "none";


    document.getElementById("memory-lane")
        .style.display = "none";


    document.getElementById("khadus-files")
        .style.display = "none";

    document.getElementById("letter-section")
    .style.display = "none";

    document.getElementById("main-content")
        .style.display = "block";

}