class todoservice {
  todo_data = {
    todo: [
      {
        title: "T1",
        description: "D1",
        done: false,
      },
      {
        title: "T1",
        description: "D1",
        done: false,
      },
      {
        title: "T2",
        description: "D2",
        done: true,
      },
      {
        title: "T1",
        description: "D1",
        done: false,
      },
    ],
  };
  constructor() {
    this.todos = this.todo_data;
  }

  get_todos() {
    return this.todos;
  }

  add_todo(todo) {
   let len=this.todo_data["todo"].length;
	this.todo_data["todo"][len]=todo;
  }

  delete_todo(id) {
    this.todos.todo.pop(id)
        return this.todos;
  }

  update_todo(id, todo) {
    this.todos.todo[id] = todo;
    return this.todos.todo[id];
  }
}

module.exports = todoservice;