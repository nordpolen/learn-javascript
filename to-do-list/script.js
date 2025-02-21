// Get the elements from the HTML
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Load tasks from local storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskText => createTaskElement(taskText));
}

// Save tasks to local storage
function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll('li').forEach(li => {
        tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to create a task element in the DOM
function createTaskElement(taskText) {
    // Create a new list item
    const li = document.createElement('li');
    li.className = "bg-pink-100 rounded-xl shadow-md p-3 mb-3 flex justify-between items-center text-pink-600";
    li.textContent = taskText;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.className = "ml-2 bg-pink-300 rounded-full p-2 hover:bg-pink-400";
    // Add an event listener to the delete button
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
        saveTasks();
    });

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(li);
}

// Add a task to the list
function addTask() {
    const taskText = taskInput.value.trim(); // Remove whitespace from the beginning and end of the string

    // Check if the task is empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    createTaskElement(taskText);
    saveTasks(); // Save to local storage after adding a task

    // Clear the input
    taskInput.value = '';
}

// Add an event listener to the add task button
addTaskButton.addEventListener('click', addTask);

// Add an event listener to the task input
taskInput.addEventListener('keypress', function (event) {
    // Check if the key pressed is the Enter key
    if (event.key === 'Enter') {
        addTask(); // Add the task
    }
});

// Load tasks when the page loads
loadTasks();