class ToDoList {
    constructor(id, title, urgent, tasks) {
        this.id = id;
        this.title = title;
        this.urgent = urgent || false;
        this.tasks = tasks
    }

    saveToStorage(list) {
        localStorage.list = JSON.stringify(list);
  }
    deleteFromStorage {

    }
    updateToDo {

    }
    updateTask {

    }
}