function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p)
    document.getElementById("result").value = q;
    switch (q) {
        case 0:
            var audio = document.getElementById("audio0");
            audio.play();
            break;
        case 1:
            var audio = document.getElementById("audio1");
            audio.play();
            break;
        case 2:
            var audio = document.getElementById("audio2");
            audio.play();
            break;
        case 3:
            var audio = document.getElementById("audio3");
            audio.play();
            break;
        case 4:
            var audio = document.getElementById("audio4");
            audio.play();
            break;
        case 5:
            var audio = document.getElementById("audio5");
            audio.play();
            break;
        case 6:
            var audio = document.getElementById("audio6");
            audio.play();
            break;
        case 7:
            var audio = document.getElementById("audio7");
            audio.play();
            break;
        case 8:
            var audio = document.getElementById("audio8");
            audio.play();
            break;
        case 9:
            var audio = document.getElementById("audio9");
            audio.play();
            break;
        case 10:
            var audio = document.getElementById("audio10");
            audio.play();
            break;

        default:
            alert("The audio of this answer is not avilable, you can smiply try to get an answer ranging from 0 to 10. Thank you.");
    }
}