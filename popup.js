const ele = document.getElementById("btn")
ele.addEventListener("click", () => {
  chrome.runtime.sendMessage({ time: "1" }, function (response) {
    console.log(response);
  });
  chrome.runtime.sendMessage({ time: "2" }, function (response) {
    console.log(response);
  });
  // Activation button for the Pomodoro method:
  chrome.runtime.sendMessage({ time: "3" }, function (response) {
    console.log(response);
  }); 
  chrome.runtime.sendMessage({ time: "4" }, function (response) {
    console.log(response);
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
