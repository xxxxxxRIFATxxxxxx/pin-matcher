// Common Variable
const pinOutput = document.getElementById("pin-output");
const numberOutput = document.getElementById("number-output");
const successNotification = document.getElementById("success-notification");
const failedNotification = document.getElementById("failed-notification");
const tryLeft = document.getElementById("try-left");
let chances = 3;

// For Generate PIN
document.querySelector(".generate-btn").addEventListener("click", function () {
    const pin = Math.floor(1000 + Math.random() * 9000);
    pinOutput.value = pin;
});

// For Press Number
const allNumber = document.querySelectorAll(".number");
for (let i = 0; i < allNumber.length; i++) {
    allNumber[i].addEventListener("click", function (event) {
        const currentValue = event.target.innerText;
        numberOutput.value += currentValue;
    });
};

// For Checking PIN
let submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", function () {
    if (chances === 0) {
        submitBtn.disabled = true;
    } else {
        if (pinOutput.value === numberOutput.value) {
            successNotification.style.display = "block";
            setTimeout(() => {
                successNotification.style.display = "none";
            }, 2000);
        }

        else {
            chances--;
            tryLeft.innerText = chances;
            failedNotification.style.display = "block";
            setTimeout(() => {
                failedNotification.style.display = "none";
            }, 2000);

        };
    };
});

// For Delete Single Number
document.querySelector(".delete").addEventListener("click", function () {
    const newNumberOutput = numberOutput.value.slice(0, -1);
    numberOutput.value = numberOutput.value.slice(0, -1);
});

// For Clear All Number
document.querySelector(".clear").addEventListener("click", function () {
    numberOutput.value = "";
});
