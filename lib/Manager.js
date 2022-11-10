import Employee from "./Employee.js";

class Manager extends Employee{
    constructor(){
        super()
        this.officeNumber = null
        this.officeNumberPrompt = "What is the office number of the new Manager?"
    }
}

Manager.prototype.setOfficeNumber = function(officeNumber){
    this.officeNumber = officeNumber
}
Manager.prototype.getOfficeNumber = function(){
    return this.officeNumber
}

export default Manager