const targetInput = document.getElementById("target-input");
const speedInput = document.getElementById("speed-input");

const charLowercase = document.getElementById("char-lowercase");
const charUppercase = document.getElementById("char-uppercase");
const charNumbers = document.getElementById("char-numbers");
const charSymbols = document.getElementById("char-symbols");

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

const activityLog = document.getElementById("activity-log");
const statAttempts = document.getElementById("stat-attempts");
const statCurrent = document.getElementById("stat-current");
const statTime = document.getElementById("stat-time");
const statStatus = document.getElementById("stat-status");

let booleanFlag = false;
let attemptsMade = 0;
let targetGiven = "";
let charSet = "";
let startTime = 0;

startBtn.addEventListener("click", () => {
  targetGiven = targetInput.value;
  charSet = "";
  if (charLowercase.checked == true) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (charUppercase.checked == true) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (charNumbers.checked == true) {
    charSet += "0123456789";
  }
  if (charSymbols.checked == true) {
    charSet += "!@#$%^&*()_+-=[]{}|;:,.<>?";
  }
  booleanFlag = true;
  attemptsMade = 0;
  startBtn.disabled = true;
  stopBtn.disabled = false;
  activityLog.innerHTML = "";
  statStatus.textContent = "Simulating....";
  statStatus.classList.remove("status-ready");
  statStatus.classList.add("status-simulating");
  startTime = Date.now();
  crackPassword("");
});
stopBtn.addEventListener("click", () => {
  booleanFlag = false;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  statStatus.textContent = "Stopped";
  statStatus.classList.remove("status-simulating");
  statStatus.classList.add("status-stopped");
});

async function crackPassword(currentGuess) {
  if (booleanFlag == false) {
    return;
  }

  if (currentGuess.length > targetGiven.length) {
    return;
  }

  attemptsMade += 1;
  statAttempts.textContent = attemptsMade;
  statCurrent.textContent = currentGuess;

  activityLog.innerHTML += `<li>Attempt ${attemptsMade}: ${currentGuess}</li>`;
  activityLog.scrollTop = activityLog.scrollHeight;

  let elapsedTime = Date.now() - startTime;
  statTime.textContent = (elapsedTime / 1000).toFixed(2) + " seconds";

  if (currentGuess == targetGiven) {
    statStatus.textContent = "Success";
    statStatus.classList.remove("status-simulating");
    statStatus.classList.add("status-cracked");
    startBtn.disabled = false;
    stopBtn.disabled = true;
    booleanFlag = false;
    return;
  }

  let speed = parseInt(speedInput.value);
  await new Promise((resolve) => setTimeout(resolve, speed));

  for (let i = 0; i < charSet.length; i++) {
    await crackPassword(currentGuess + charSet[i]);
  }
}
