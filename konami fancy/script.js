const codes = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];
var back = document.querySelector("body")
var thecode = []
var truth = 0
var wrong = 0
var thetext = document.querySelector("span")
var bigtext = document.querySelector("div")

function konami() {
    return alert('congratulatory message')
}

function nope() {
    return alert('nope message')
}

function keychange() {
    for (var i = 0; i < thecode.length; i++) {
        if (thecode[i] == "KeyA") {
            thecode[i] = "a"
        } else if (thecode[i] == "KeyB") {
            thecode[i] = "b"
        } else {
            console.log(thecode[i])
        }
    }
}

function theverdict() {
    for (var i = 0; i < thecode.length; i++) {
        if (thecode[i] == codes[i]) {
            truth = truth + 1
        } else {
            wrong = wrong + 1
        }
    }
}

function cleanslate() {
    truth = 0
    wrong = 0
    thecode.length = 0
    thetext.innerHTML = ""
    bigtext.innerHTML = ""
}

function init() {
    // your code here
    back.addEventListener('keydown', function(event) {
        thecode.push(event.key)
        keychange()
        bigtext.innerHTML = event.key
        thetext.innerHTML = thecode
        if (thecode.length == 10) {
            theverdict()
            if (truth == 10) {
                alert('konami wins');
                window.location = "http://dcartist.github.io/doughnut"
                cleanslate()
            } else {
                // alert('wrong code')
                cleanslate()
            }

        }

    })

}

init()