function changeColor(arg) {
    var getdata = document.getElementById("changecolor");
    var heading = document.getElementById("heading");

    if (arg) {
        if (arg == 'brown') {
            getdata = getdata.className = "brown";
            heading.textContent = "BROWN SQUARE";
            heading.style.color = 'brown';
        }
        if (arg == 'goldenrod') {
            getdata = getdata.className = "goldenrod";
            heading.textContent = 'GOLDENROD CIRCLE';
            heading.style.color = 'goldenrod';
        }
        if (arg == 'green') {
            getdata = getdata.className = "green";
            heading.textContent = 'GREEN RECTANGLE';
            heading.style.color = 'green';
        }
        if (arg == 'reset') {
            getdata = getdata.className = "box";
            heading.textContent = "DEFAULT HEADING"
            heading.style.color = 'black';
        }

    }
}