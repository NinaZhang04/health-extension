// By pressing this button it should read all the fields
const ele = document.getElementById("btn")
ele.addEventListener("click", () => {
  chrome.runtime.sendMessage({ time: "1", repeat: 30}, function (response) {
    console.log(response);
  });
  chrome.runtime.sendMessage({ time: "2", repeat: 60}, function (response) {
    console.log(response);
  });
  // Activation button for the Pomodoro method:
  chrome.runtime.sendMessage({ time: "3", repeat: 10}, function (response) {
    console.log(response);
  }); 
  chrome.runtime.sendMessage({ time: "4", repeat: 23}, function (response) {
    console.log(response);
  }); 
});


// Water break set
const water_alarm = document.getElementById("water_break");
water_alarm.addEventListener("click", () => {
  let waterTime = parseFloat(document.getElementById("waterNum").value);
  chrome.runtime.sendMessage({ time: "1" , repeat: waterTime}, function (response) {
    console.log(response);
  }, );
});

// Screen break set
const screen_alarm = document.getElementById("screen_break");
screen_alarm.addEventListener("click", () => {
  let screenTime = parseFloat(document.getElementById("screenNum").value);
  chrome.runtime.sendMessage({ time: "2" , repeat: screenTime}, function (response) {
    console.log(response);
  });
});

// Activation for the Pomodoro method:
const pomodoroButton = document.getElementById("pomodoro_timer");
pomodoroButton.addEventListener("click", () => {
  chrome.runtime.sendMessage({ time: "3", repeat: 1}, function (response) {
    console.log(response);
  }); 
});

// Sleep reminder
const sleepButton = document.getElementById("sleep_reminder");
sleepButton.addEventListener("click", () => {
  let sleepNum = parseFloat(document.getElementById("sleepNum").value);
  chrome.runtime.sendMessage({ time: "4" ,repeat: sleepNum}, function (response) {
    console.log(response);
  });
});

//Stop water alarms
const stopWater = document.getElementById("stopWater");
stopWater.addEventListener("click", () => {
  chrome.runtime.sendMessage({ time: "5" ,repeat: 0}, function (response) {
  });
});

//Stop screen alarms
const stopScreen = document.getElementById("stopScreen");
stopScreen.addEventListener("click", () => {
  chrome.runtime.sendMessage({ time: "6" ,repeat: 0}, function (response) {
  });
});

//Stop pomodoro alarms
const stopPomodoro = document.getElementById("stopPomodoro");
stopPomodoro.addEventListener("click", () => {
  chrome.runtime.sendMessage({ time: "7" ,repeat: 0}, function (response) {
  });
});


//Stop sleep alarms
const stopSleepReminder = document.getElementById("stopSleepReminder");
stopSleepReminder.addEventListener("click", () => {
  chrome.runtime.sendMessage({ time: "8" ,repeat: 0}, function (response) {
  });
});

//Stop ALL ALARMS
const stopAllReminders = document.getElementById("stopAllReminders");
stopAllReminders.addEventListener("click", () => {
  chrome.runtime.sendMessage({ time: "9" ,repeat: 0}, function (response) {
  });
});


/*
// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
*/
