
let piece = "";
let tosquare = "";
let dict = {
  "a" : "AA",
  "b" : "bee",
  "c" : "sea",
  "d" : "dee",
  "e" : "e",
  "f" : "f",
  "g" : "g",
  "h" : "h",
}
if (annyang) {
  function fncmaker(str) {
    return function () {
        chrome.runtime.sendMessage({ pressEnter: true });
        var ready = document.querySelector(".ready");
        if(piece) {
          ready.value = piece
          chrome.runtime.sendMessage({ pressEnter: true });

          tosquare = str;
        } else {
          piece = str;
        }
        console.log(str);
        chrome.runtime.sendMessage({toSay: dict[str[0]] + str[1]});
    }
  }
  function move() {
    var ready = document.querySelector(".ready");
    console.log(piece, tosquare);
    if( piece && !tosquare) { // pawn move
      ready.value = piece;
      chrome.runtime.sendMessage({ pressEnter: true });
    }
    if(piece && tosquare) {
        chrome.runtime.sendMessage({ pressEnter: true });
        ready.value = tosquare;
    }
    piece = ""
    tosquare = ""
  }

  function no() {
    var ready = document.querySelector(".ready");

    if(tosquare) {
      ready.value = piece
      chrome.runtime.sendMessage({ pressEnter: true });

      tosquare = "";
    } else {
      piece = "";
    }
    chrome.runtime.sendMessage({toSay: "oops"});

  }
  console.log("begin annyang");
  // Let's define a command.
  const commands = {
    "no" : no,
    "ok" : move
    };
  const file = "abcdefgh";
  for(var i = 0; i < 8; i++) {
    var f = file[i];
    for(var b = 1; b <= 8; b++) {
      var r = b;
      commands[f + r] = fncmaker(f+r);
    }
  }
  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}
