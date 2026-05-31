let habitIndex = 0;
let habits = ["Drink water 💧", "Read 10 mins 📖", "Take a walk 🚶", "Stretch 🧘"];

let progress = 0;

// NAVIGATION (REAL APP FEEL)
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });

  document.getElementById(page).classList.add('active');
}

// TASKS
function addTask() {
  let input = document.getElementById("taskInput");
  if (input.value.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = "✔ " + input.value;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}

// HABITS
function nextHabit() {
  habitIndex = (habitIndex + 1) % habits.length;
  document.getElementById("habitText").innerText = habits[habitIndex];
}

// STATS
function increase() {
  if (progress < 100) {
    progress += 20;
    document.getElementById("progress").style.width = progress + "%";
  }
}
