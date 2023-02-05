const Intern = require("../lib/intern")

describe('Intern', () => {
    
    test("sets and retrieves the intern's school", () => {
        const school = "Stanford";
        const test = new Intern("n/a", 1, "n/a", school);
        expect(test.getSchool()).toBe(school);
    })

    test("returns employee role", () => {
        const role = "Intern"
        const test = new Intern();
        expect(test.getRole()).toBe(role);
    })

});