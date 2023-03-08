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
    console.log("mastSequence ", mastSequence)
    showSequence();
}

function setNextNum() {
    nextNum = getRandom().toString();
    current = mastSequence
    globalThis.mastSequence = current + nextNum;
    console.log("mastSequence", mastSequence)
    showSequence();
}

function showSequence() {
    // document.getElementById("myH1").style.color = "red";
    seq = mastSequence.split("");

    for (let i = 0; i < seq.length; i++) {
        
    }

    
}

// sequence = {

//     check: function (e) {
//         console.log(mastSequence)

//         sequence.value += this.id;
//         console.log(sequence.value)

//         if (sequence.value == mastSequence) {
//             alert("You did it!");
//             sequence.value = "";
//         }
//         else {
//             if (sequence.value.length == mastSequence.length) {
//                 console.log(sequence.value.length)
//                 console.log(mastSequence.length)

//                 if (sequence.value != mastSequence) {
//                     console.log(sequence.value)
//                     console.log(mastSequence)

//                     alert("Try again")
//                     sequence.value = "";
//                 }
//             }
//         }
//     },
//     setSequence: function (e) {

//     },

//     value: ""

// }


sequence = {

    check: function (e) {
        sequence.value += this.id;
        console.log("Seq Value", sequence.value)

        if (sequence.value == mastSequence) {
            console.log("correct")
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
