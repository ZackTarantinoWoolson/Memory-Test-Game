// button1 = document.getElementById("btn1")
// button2 = document.getElementById("btn2")
// button3 = document.getElementById("btn3")
// button4 = document.getElementById("btn4")
// button5 = document.getElementById("btn5")
// button6 = document.getElementById("btn6")
// button7 = document.getElementById("btn7")
// button8 = document.getElementById("btn8")
// button9 = document.getElementById("btn9")


var mastSequence = "";


function getRandom() {
    return Math.floor(Math.random() * 9) + 1;
}

function setMasterSeqFirstNum() {
    globalThis.mastSequence = getRandom().toString();
    // console.log("mastSequence ", mastSequence)
    showSequence();
}

function setNextNum() {
    nextNum = getRandom().toString();
    current = mastSequence
    globalThis.mastSequence = current + nextNum;
    // console.log("mastSequence", mastSequence)
    showSequence();
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function showSequence() {
    seq = mastSequence.split("");

    for (let i = 0; i < seq.length; i++) {
        // console.log(seq[i])
        await delay(500);
        document.getElementById(seq[i]).style.backgroundColor = "red"
        await delay(500);
        document.getElementById(seq[i]).style.backgroundColor = ""
        
    }   
}

sequence = {

    check: function (e) {
        sequence.value += this.id;
        // console.log("Seq Value", sequence.value)

        if (sequence.value == mastSequence) {
            // console.log("correct")
            setNextNum();
            sequence.value = "";
        }
        else if (sequence.value.length == mastSequence.length) {
            alert("Try again")
            setMasterSeqFirstNum();
            sequence.value = "";
        }
    },

    value: ""

}

Array.prototype.map.call(document.querySelectorAll("button"), function (element) {
    element.addEventListener("click", sequence.check, false);
});
