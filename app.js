let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let progress = 0;

let habits = [
  "Drink water 💧",
  "Stretch 🧘",
  "Read 10 mins 📖",
  "Walk 🚶"
];

let habitIndex = 0;

/* INIT */
renderTasks();
updateStats();
loadTheme();

/* NAVIGATION */
function switchTab(tab) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(tab).classList.add("active");

  document.getElementById("pageTitle").innerText =
    tab.charAt(0).toUpperCase() + tab.slice(1);
}

/* TASK SYSTEM */
document.getElementById("taskInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value.trim()) {
    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";

    renderTasks();
    updateStats();
    showToast("Task added ✔");
  }
}

function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((t, i) => {
    list.innerHTML += `
      <div class="task">
        ${t}
        <button onclick="deleteTask(${i})">✕</button>
      </div>
    `;
  });
}

function deleteTask(i) {
  tasks.splice(i, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  updateStats();
}

/* HABITS */
function nextHabit() {
  habitIndex = (habitIndex + 1) % habits.length;
  document.getElementById("habitText").innerText = habits[habitIndex];
}

/* PROGRESS */
function increase() {
  if (progress < 100) progress += 10;

  document.getElementById("progressBar").style.width = progress + "%";
  document.getElementById("progressBar2").style.width = progress + "%";
}

/* STATS */
function updateStats() {
  document.getElementById("taskCount").innerText = tasks.length;
}

/* TOAST */
function showToast(msg) {
  let toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 1500);
}

/* THEME */
function toggleTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
}

function loadTheme() {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
  }
}
