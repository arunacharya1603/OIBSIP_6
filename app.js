// Get references to HTML elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Task list array to store tasks
let tasks = [];

// Function to create a new task item
function createTaskItem(task) {
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  const taskName = document.createElement('span');
  taskName.classList.add('task-name');
  taskName.textContent = task;

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  // Event listener for edit button
  editButton.addEventListener('click', function () {
    const newTask = prompt('Edit task:', task);
    if (newTask) {
      taskName.textContent = newTask;
      updateTask(task, newTask);
    }
  });

  // Event listener for delete button
  deleteButton.addEventListener('click', function () {
    deleteTask(task);
    taskItem.remove();
  });

  taskItem.appendChild(taskName);
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);

  return taskItem;
}

// Function to add a new task
function addTask(task) {
  tasks.push(task);
  const taskItem = createTaskItem(task);
  taskList.appendChild(taskItem);
}

function updateTask(oldTask, newTask) {
  const index = tasks.indexOf(oldTask);
  if (index !== -1) {
    tasks[index] = newTask;
  }
}


function deleteTask(task) {
  const index = tasks.indexOf(task);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}


taskForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const task = taskInput.value.trim();
  if (task) {
    addTask(task);
    taskInput.value = '';
  }
});
