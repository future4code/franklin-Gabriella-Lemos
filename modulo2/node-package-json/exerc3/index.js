const taskList = ["estudar", "dormir", "ler"];

const newTask = process.argv[2];

taskList.push(newTask);
console.log(taskList);
