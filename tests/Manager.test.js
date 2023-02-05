const Manager = require("../lib/manager")

describe('Manager', () => {
    
    test("sets and retrieves the manager's office number", () => {
        const officeNumber = 1;
        const test = new Manager("n/a", 1, "n/a", officeNumber);
        expect(test.getOfficeNumber()).toBe(officeNumber);
    })

    test("returns employee role", () => {
        const role = "Manager"
        const test = new Manager();
        expect(test.getRole()).toBe(role);
    })

});