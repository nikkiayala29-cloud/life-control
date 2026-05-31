let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let progress = 0;
let habits = ["Drink water 💧", "Stretch 🧘", "Read 10 mins 📖", "Walk 🚶"];
let habitIndex = 0;

/* NAVIGATION */
function switchTab(tab) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(tab).classList.add("active");

  document.getElementById("pageTitle").innerText =
    tab.charAt(0).toUpperCase() + tab.slice(1);
}

/* TASK SYSTEM */
function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value.trim()) {
    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    renderTasks();
    showToast("Task added");
    updateStats();
  }
}

function renderTasks() {
  let container = document.getElementById("taskList");
  container.innerHTML = "";

  tasks.forEach((t, i) => {
    container.innerHTML += `
      <div class="task">
        ${t}
        <button onclick="removeTask(${i})">x</button>
      </div>
    `;
  });
}

function removeTask(i) {
  tasks.splice(i, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  showToast("Task removed");
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

  document.querySelector("#progressBar").style.width = progress + "%";
  document.querySelector("#progressBar2").style.width = progress + "%";
}

/* STATS */
function updateStats() {
  document.getElementById("taskCount").innerText =
    "Tasks: " + tasks.length;
}

/* TOAST NOTIFICATION */
function showToast(msg) {
  let toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 1500);
}

function notify() {
  showToast("System running smoothly ⚡");
}

/* INIT */
renderTasks();
updateStats();
