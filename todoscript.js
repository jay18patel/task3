document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('todo-list');

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';

    li.querySelector('.delete-btn').addEventListener('click', function () {
        taskList.removeChild(li);
    });
}