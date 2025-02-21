// Get the elements from the HTML
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Add a task to the list
function addTask() {
    const taskText = taskInput.value.trim(); // Remove whitespace from the beginning and end of the string

    // Check if the task is empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    // Add an event listener to the delete button
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(li);

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