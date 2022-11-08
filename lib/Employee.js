class Employee {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }
}
Employee.prototype.getName = function(){

}
Employee.prototype.getId = function(){
    
}
Employee.prototype.getEmail = function(){
    
}
Employee.prototype.getRole = function(){
    return (this)
}



const worker = new Employee(eric, 420, "erictomlinsonsimmons@gmail.com")
console.log(worker)


export default Employee