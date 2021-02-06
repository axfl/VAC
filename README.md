# VAC
VAC: Voice Activated Chess

VAC is a Chrome Extension that allows you to play blindfolded chess on https://lichess.org by using your voice.

DISCLAIMER: do NOT install VAC unless you read through the source code and see nothing malicious. The chrome extension uses developer tools that have extra permissions and I am not responsible for your usage of the application.

# Installation instructions: 
- Part 1: Installing VAC chrome extension

  1) Releases are here: https://github.com/axfl/VAC/releases
  2) On the latest release, under "Assets", click "source code (.zip)" to download the extension
  3) Unzip the source code .zip 
  4) Go to chrome://extensions
  5) On the top right, enable Developer Mode
  6) On the top left, there should be a button that says "Load Unpacked"
  7) Clicking this button will ask you to look for the extension you downloaded & unzipped. It's probably in your Downloads folder, find it and select it.
  8) In your extensions, you should see VAC listed. This means you've succesfully installed the extension! 
  
- Part 2: Lichess settings
  
  1) Make sure you're logged into your lichess account
  2) On the top right, click your username, then click Preferences 
  3) On the left, click Game Behavior
  4) Scroll down, Enable "Input Moves with Keyboard"
  5) Click your username again, click Sound, then click Speech

And you're finished installing!

# Usage Instructions
## Example of moving a pawn from E2 to E4:
- You:        "e2"
- Computer:   "e2"
- You:        "e4"
- Computer:   "e4"
- You:        "ok"
- Computer:  Plays the move e2 to e4

## Basic Usage:
  1) say the square of the piece you want to move
  2) it'll be repeated to you
  3) say the square you want to move it to. 
  4) it'll be repeated to you
  5) Say OK to actually move it.
  
## Shortcut: Pawn moves can be done in ONE move.

For example, to move a pawn from e2 to e4:
- You: "e4"
- Computer: "e4"
- You: "ok"
- Computer: Plays the move e2 to e4

## Correction: say "no" to retract the last move if the application messes up.

For example, to move a pawn from e2 to e4:
- You: "e4"
- Computer: "b4"
- You: "no"
- Computer: "oops"
- You: "e4"
- Computer: "e4"
- You: "ok"
- Computer: Plays the move e4

Another example: to move a knight from g1 to f3:
- You: "g1"
- Computer: "g1"
- You: "f3"
- Computer: "c3"
- You: "no"
- Computer: "oops"
- You: "f3"
- Computer: "f3"
- You: "ok"
- Computer: moves knight from g1 to f3




  




