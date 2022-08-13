let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.alarms.onAlarm.addListener(
  () => {
    chrome.notifications.create(
      {
        type: "basic",
        iconUrl: "/images/get_started128.png",
        title: "Stay Hydrated!",
        message: "Remeber to drink your water :)",
        silent: false
        
      },
      () => { }
    )
  }
)


chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    //console.log(request);
    if (request.time)
      createAlarm();
    //sendResponse(() => {
    //  return false;
    //});
  }
);

function createAlarm(){
  chrome.alarms.create(
    "drink_water",
    {
      //Length of time in minutes after which the onAlarm event shoudl fire.
      delayMinutes: 0.5,

      //If set, the onAlarm event should fire every periodInMinutes minutes after the initial event specified
      periodInMintues: 1
    }
  )
}