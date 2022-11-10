import Employee from "./Employee.js";

class Intern extends Employee {
    constructor() {
        super()
        this.school = null
        this.schoolPrompt = "What is the school the new Intern is attending?"
    }
}
Intern.prototype.setSchool = function(school) {
    this.school = school
}
Intern.prototype.getSchool = function() {
    return this.school
}

export default Intern