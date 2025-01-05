const fs = require("fs");
const filePath = "./tasks.json";

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
};

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
    console.log("Task Added", tasks); // Corrected "task" to "tasks" for proper logging.
};

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({ task }); // Retained as is, works correctly.
    saveTasks(tasks);
};

const listTasks = () => { // Added missing function to list tasks.
    const tasks = loadTasks();
    console.log("Your Tasks:");
    tasks.forEach((t, index) => console.log(`${index + 1}. ${t.task}`));
};

const removeTasks = (index) => { // Added missing function to remove tasks.
    const tasks = loadTasks();
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        saveTasks(tasks);
        console.log("Task removed successfully.");
    } else {
        console.log("Invalid task index.");
    }
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "Add") {
    addTask(argument);
} else if (command === "List") {
    listTasks();
} else if (command === "remove") {
    removeTasks(parseInt(argument));
} else {
    console.log("Command Not Found");
}
