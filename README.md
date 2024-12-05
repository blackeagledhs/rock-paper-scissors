# Rock Paper Scissors Game

A simple **Rock, Paper, Scissors** game implemented using HTML, CSS, and JavaScript. The game can be played in the console or through a simple web interface.

---

## **Assignment Details**

### Step 1: Setup the Project Structure
1. Create a new Git repository for the project.
2. Set up a basic HTML file with a script tag to include JavaScript.
3. Verify JavaScript is linked by writing `console.log("Hello World")` and confirming it appears in the browser console.

### Step 2: Write the Logic to Get the Computer's Choice
- Implement a function `getComputerChoice` that randomly returns one of:
  - `"rock"`
  - `"paper"`
  - `"scissors"`
- Use `Math.random` to generate a random selection.

### Step 3: Write the Logic to Get the Human's Choice
- Create a function `getHumanChoice` to retrieve and validate user input (via `prompt` in the console version).

### Step 4: Declare Player Score Variables
- Declare `humanScore` and `computerScore` variables globally and initialize them to `0`.

### Step 5: Write the Logic to Play a Single Round
- Implement a function `playRound` that:
  - Compares the player's and computer's choices.
  - Determines the winner of the round.
  - Updates the corresponding score (`humanScore` or `computerScore`).
  - Outputs a message indicating the result.

### Step 6: Write the Logic to Play the Game
- Create a `playGame` function to play **5 rounds**:
  - Calls `playRound` five times.
  - Keeps track of scores.
  - Declares the winner at the end of the game.

---

## **Visual Interface**
The game includes a user-friendly interface:
- **Buttons** for Rock, Paper, and Scissors.
- **Dynamic Scoreboard** to display current scores.
- **Result Display** to show the outcome of each round.

---

## **Project Files**
### **HTML**
- Includes a simple layout with buttons for user choices.

### **CSS**
- Adds styling for buttons, the scoreboard, and result messages.

### **JavaScript**
- Contains game logic, including:
  - Random choice generation.
  - User interaction handling.
  - Score tracking and updates.

---

## **How to Run**
1. Clone the repository:
    ```bash
    git clone https://github.com/<your-username>/rock-paper-scissors.git
    ```
2. Open `index.html` in a web browser.
3. Play the game by clicking the buttons for your choice.

---

## **Game Rules**
1. The player chooses **Rock**, **Paper**, or **Scissors**.
2. The computer randomly chooses one of the three.
3. The winner is determined based on:
   - **Rock beats Scissors**
   - **Scissors beats Paper**
   - **Paper beats Rock**
4. Play 5 rounds, and the player with the highest score wins!

---

## **Future Enhancements**
- Add more rounds or a reset button.
- Include animations for interactions.
- Provide sound effects for winning and losing rounds.

---

## **Author**
Created as part of a JavaScript learning assignment.
