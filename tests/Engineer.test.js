const Engineer = require("../lib/engineer")

describe('Engineer', () => {
    
    test("sets and retrieves the engineer's github", () => {
        const github = "testprofile";
        const test = new Engineer("n/a", 1, "n/a", github);
        expect(test.getGithub()).toBe(github);
    })

    test("returns employee role", () => {
        const role = "Engineer"
        const test = new Engineer();
        expect(test.getRole()).toBe(role);
    })

});