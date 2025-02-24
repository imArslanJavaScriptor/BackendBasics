const fs = require("fs")
const filePath = "./tasks.json"

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return[]
    }
}

const addTask = (task) => {
    const tasks = loadTasks()
    tasks.puch(task)
    saveTasks(tasks)
}

const command = process.argv[2]
const argument = process.argv[3]

if(command === "add") {
    addTask("argument")
}else if(command === "list") {
    listTasks()
}else if(command === "remove") {
    removeTask(parseInt(argument))
}else {
    console.log("Command not found")
}