# 🔐 Brute-Force Password Cracker Simulator

A visual, interactive web simulator that demonstrates the mathematics and mechanics of brute-force password cracking in real-time. Built to show exactly why password length matters.

## ✨ Features
* **The Matrix Terminal:** An auto-scrolling activity log that renders every single guess the algorithm makes in real-time.
* **Live Dashboard:** Tracks elapsed time, total attempts made, current string being tested, and system status.
* **Custom Engine:** Built with a custom asynchronous recursive loop in vanilla JavaScript.
* **Adjustable Parameters:** 
  * Select active character sets (Lowercase, Uppercase, Numbers, Symbols).
  * Adjust the algorithm's delay speed (in ms) to watch it run in slow-motion or maximum overdrive.
  * Define any target password to test.

## 🚀 How It Works
1. Enter a target password.
2. Select the character sets the algorithm is allowed to use.
3. Set your speed (Try 50ms to watch the logic, or 0ms to let it fly).
4. Hit **Start**.
5. The recursive engine builds combinations layer by layer until it hits the exact match, updating the UI and terminal at every step.

## 🧠 Educational Takeaway
Try entering a 2-letter password—it cracks instantly. Try a 5-letter password, and the browser has to calculate millions of combinations. This simulator physically demonstrates why adding just one or two characters to your personal passwords makes them exponentially harder to crack!

## 🛠️ Tech Stack
* HTML5 / CSS3
* Vanilla JavaScript (DOM Manipulation, Async/Await Promises, Recursion)
