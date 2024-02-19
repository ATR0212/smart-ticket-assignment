var clicked = 0;
function changeColorA1(x) {
    var x;
    if (x === 1) {
        clicked = clicked + 1;
    }
    if (clicked === 1) {
        document.getElementById("A1").style.background = "green";
    }
    else if (clicked === 2) {
        document.getElementById("A1").style.background = "#F7F8F8";
        clicked = 0;
    }
}
function changeColorA2(x) {
    var x;
    if (x === 1) {
        clicked = clicked + 1;
    }
    if (clicked === 1) {
        document.getElementById("A2").style.background = "green";
    }
    else if (clicked === 2) {
        document.getElementById("A2").style.background = "#F7F8F8";
        clicked = 0;
    }
}
function changeColorA3(x) {
    var x;
    if (x === 1) {
        clicked = clicked + 1;
    }
    if (clicked === 1) {
        document.getElementById("A3").style.background = "green";
    }
    else if (clicked === 2) {
        document.getElementById("A3").style.background = "#F7F8F8";
        clicked = 0;
    }
}
function changeColorA4(x) {
    var x;
    if (x === 1) {
        clicked = clicked + 1;
    }
    if (clicked === 1) {
        document.getElementById("A4").style.background = "green";
    }
    else if (clicked === 2) {
        document.getElementById("A4").style.background = "#F7F8F8";
        clicked = 0;
    }
}

// ................................................

function changeColorB1(x) {
    var x;
    if (x === 1) {
        clicked = clicked + 1;
    }
    if (clicked === 1) {
        document.getElementById("B1").style.background = "green";
    }
    else if (clicked === 2) {
        document.getElementById("B1").style.background = "#F7F8F8";
        clicked = 0;
    }
}
function changeColorB2(x) {
    var x;
    if (x === 1) {
        clicked = clicked + 1;
    }
    if (clicked === 1) {
        document.getElementById("B2").style.background = "green";
    }
    else if (clicked === 2) {
        document.getElementById("B2").style.background = "#F7F8F8";
        clicked = 0;
    }
}
function changeColorB3(x) {
    var x;
    if (x === 1) {
        clicked = clicked + 1;
    }
    if (clicked === 1) {
        document.getElementById("B3").style.background = "green";
    }
    else if (clicked === 2) {
        document.getElementById("B3").style.background = "#F7F8F8";
        clicked = 0;
    }
}
function changeColorB4(x) {
    var x;
    if (x === 1) {
        clicked = clicked + 1;
    }
    if (clicked === 1) {
        document.getElementById("B4").style.background = "green";
    }
    else if (clicked === 2) {
        document.getElementById("B4").style.background = "#F7F8F8";
        clicked = 0;
    }
}

function hideSection(elementId) {
    const getId = document.getElementById(elementId);
    getId.classList.add("hidden")
}

function showSection(elementId) {
    const getId = document.getElementById(elementId);
    getId.classList.remove("hidden")
}

function seccess() {
    hideSection("ticket-section");
    showSection("seccessful-page");
}