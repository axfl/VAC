let connected = false;

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if(message.pressEnter){
        chrome.tabs.query({active: true}, function(tabs) {
          if(!connected) {
            chrome.debugger.attach({ tabId: tabs[0].id }, "1.0");
            connected = true;
          }
            chrome.debugger.sendCommand({ tabId: tabs[0].id }, 'Input.dispatchKeyEvent', { type: 'keyUp', windowsVirtualKeyCode:13, nativeVirtualKeyCode : 13, macCharCode: 13  });
            chrome.debugger.sendCommand({ tabId: tabs[0].id }, 'Input.dispatchKeyEvent', { type: 'keyDown', windowsVirtualKeyCode:13, nativeVirtualKeyCode : 13, macCharCode: 13  });
        });
    }
});


chrome.runtime.onMessage.addListener(function(request) {
  chrome.tts.speak(request.toSay,  function() {
    if (chrome.runtime.lastError) {
      console.log('Error: ' + chrome.runtime.lastError.message);
    }
  });
});
