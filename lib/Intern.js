import Employee from "./Employee.js";

class Intern extends Employee {
    constructor() {
        super()
        this.school = null
        this.schoolPrompt = "What is the school the new Intern is attending?"
    }
    getSchool() {
        return this.school
    }
}

export default Intern