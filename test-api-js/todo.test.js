

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements

 test("add_todo", () => {
        expect(todo_service.add_todo().todo.length).toEqual(3);
    });
test("delete_todos", () => {
        expect(todo_service.delete_todo(id).todo.length).toEqual(1);
    });

describe("update testing", () => {
  let todoService2 = new todoservice();
  test("Update instance", () => {
    expect(todoService2.update_todo(2, {
        title : "Updated-T2",
        description: "Updated-T3",
        done: true
    })).toBe(todoService2.get_todos().todo[2]);
})});