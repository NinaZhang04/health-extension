let color = '#3aa757';
/*
//newly added
//try to keep background process persistent
let lifeline;
keepAlive();
*/

/*
//newly added
chrome.runtime.onConnect.addListener(port => {
  if (port.name === 'keepAlive') {
    lifeline = port;
    setTimeout(keepAliveForced, 295e3); // 5 minutes minus 5 seconds
    port.onDisconnect.addListener(keepAliveForced);
  }
});

//newly added
function keepAliveForced() {
  lifeline?.disconnect();
  lifeline = null;
  keepAlive();
}
*/


let water_alarm;

chrome.alarms.onAlarm.addListener(

  function(alarm){
    //determine which alarm is set off

    //log to keep track which alarm is set off
    console.log(alarm.name);

    if (alarm.name === "drink_water"){
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

    else if (alarm.name === "screen_time_check"){
      chrome.notifications.create(
        {
          type: "basic",
          iconUrl: "/images/get_started128.png",
          title: "Screen time reminder",
          message: "You have been using your computer for a while!",
          silent: false
        },
        () => { }
      )
    }

    else if (alarm.name === "pomodoro_method"){
      chrome.notifications.create(
        {
          // Alarm pop-up content is noted down below:
          type: "basic",
          iconUrl: "/images/get_started128.png",
          title: "Pomodoro Method: take your 5 minute break now!",
          message: "You have worked for 25 minutes continously, now take a 5 minute break and get your mind back in focus!",
          silent: false
        },
        () => { }
      )
    }

    else if(alarm.name === "sleep-reminder"){
      chrome.notifications.create(
        {
          // Alarm pop-up content is noted down below:
          type: "basic",
          iconUrl: "/images/get_started128.png",
          title: "Time to sleep!",
          message: "Right now it is the best for your health to go to sleep",
          silent: false
        },
        () => { }
      )
    }
  }
)


chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    //console.log(request);
    if (request.time == 1){
      createAlarm(1, request.repeat);
    } 
    else if(request.time == 2){
      createAlarm(2, request.repeat);
    } 
    else if (request.time == 3) {
      createAlarm(3, 1); // note: the second parameter wouldn't matter for the specified function.
    } 
    else if (request.time == 4) {
      createAlarm(4, request.repeat); // note: the second parameter wouldn't matter for the specified function.
    }
    else if(request.time  == 5){
      console.log(5);
      stopWaterAlarm();
    }
    else if(request.time  == 6){
      console.log(6);
      stopScreenTimeAlarm();
    }
    else if(request.time  == 7){
      console.log(7);
      stopPomodoroAlarm();
    }
    else if(request.time  == 8){
      console.log(8);
      stopSleepAlarm();
    }
    else if(request.time  == 9){
      console.log(9);
      stopAllAlarm();
    }

  }
);

//type 1 is water reminder, type 2 is screen time reminder
function createAlarm(type, num){
  if(type == 1){
    chrome.alarms.create(
      "drink_water",
      {
        //Length of time in minutes after which the onAlarm event should fire.
        delayInMinutes: num,
  
        //If set, the onAlarm event should fire every periodInMinutes minutes after the initial event specified
        periodInMinutes: num
      }
    )
  }
  else if(type == 2){
    chrome.alarms.create(
      "screen_time_check",
      {
        //Length of time in minutes after which the onAlarm event should fire.
        delayInMinutes: num,
  
        //If set, the onAlarm event should fire every periodInMinutes minutes after the initial event specified
        periodInMinutes: num
      }
    )
  } else if (type == 3) {
    chrome.alarms.create(
      "pomodoro_method",
      {
        // Timespan is noted down below:
        delayInMinutes: 25,
        periodInMinutes: 30,
      }
    )
  }
  else if (type == 4){
    //sleep time reminder
    console.log(Date());
    
    
    //this does the timezone offset
    const d = new Date();
    let diff = d.getTimezoneOffset()*1000*60;

    //how many miliseconds passed in a day
    let msPassed = (Date.now())%(1000*3600*24) - diff;
    console.log(diff);

    console.log(msPassed);
    //Use the sleep time to subtract that milisecond
    let addedTime = 1000*3600*num - msPassed;
    console.log(addedTime);
    //if the time already passed
    if(addedTime <= 0){
      addedTime += 1000*3600*24;
    }
    else{
      //
    }

  console.log(Date.now() + addedTime);
    chrome.alarms.create(
      "sleep-reminder",
      {

        when: Date.now() + addedTime,

        //a full day: 24 hours => 24 x 60 min = 1440 min
        periodInMinutes: 1440
      }
    )
  }

}


function stopWaterAlarm(){
  chrome.alarms.clear("drink_water");
}

function stopScreenTimeAlarm(){
  chrome.alarms.clear("screen_time_check");
}

function stopPomodoroAlarm(){
  chrome.alarms.clear("pomodoro_method");
}

function stopSleepAlarm(){
  chrome.alarms.clear("sleep-reminder");
}

function stopAllAlarm(){
  chrome.alarms.clearAll();
}
  
