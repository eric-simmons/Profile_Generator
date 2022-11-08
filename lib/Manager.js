import Employee from "./Employee.js";

class Manager extends Employee{
    constructor(){
        super()
        this.officeNumber = null
        this.officeNumberPrompt = "What is the office number of the new Manager?"
    }
}

export default Manager