class Employee {
    constructor(){
        this.name = null
        this.id = null
        this.email = null
        this.namePrompt = "What is the name of the new Employee?"
        this.idPrompt = "What is the ID number of the new Employee?"
        this.emailPrompt = "What is the email Address of the new Employee?"
    }
}
Employee.prototype.getName = function(){
return this.name
}
Employee.prototype.getId = function(){
return this.id
}
Employee.prototype.getEmail = function(){
return this.email
}
Employee.prototype.getRole = function(){
    return this.constructor.name
}
Employee.prototype.setName = function(name){
    this.name = name
}
Employee.prototype.setId = function(id){
    this.id = id
}
Employee.prototype.setEmail = function(email){
    this.email = email
}



export default Employee