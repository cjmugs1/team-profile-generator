const Employee = require("../lib/employee")

describe('Employee', () => {
    
    test("sets and returns employee name", () => {
        const name = "Greg";
        const id = 1
        const email = "test@gmail.com"
        const test = new Employee(name, id, email);
        expect(test.getName()).toBe(name);
    })

    test("sets and returns employee ID", () => {
        const name = "Greg";
        const id = 1
        const email = "test@gmail.com"
        const test = new Employee(name, id, email);
        expect(test.getId()).toBe(id);
    })

    test("sets and returns employee email", () => {
        const name = "Greg";
        const id = 1
        const email = "test@gmail.com"
        const test = new Employee(name, id , email);
        expect(test.getEmail()).toBe(email);
    })

    test("returns employee role", () => {
        const role = "Employee"
        const test = new Employee();
        expect(test.getRole()).toBe(role);
    })

});