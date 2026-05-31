let score = 0;
let habits = ["Drink water 💧", "Take a walk 🚶", "Read 10 mins 📖", "Stretch 🧘"];
let habitIndex = 0;

// TASKS
function addTask() {
  let input = document.getElementById("taskInput");
  let list = document.getElementById("taskList");

  if (input.value.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
  }
}

// SCORE
function increaseScore() {
  if (score < 100) {
    score += 10;
    document.getElementById("score").innerText = score + "%";
  }
}

// HABITS
function changeHabit() {
  habitIndex = (habitIndex + 1) % habits.length;
  document.getElementById("habit").innerText = habits[habitIndex];
}
