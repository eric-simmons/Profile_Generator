import Employee from "./Employee";

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getGithub(){
        return this.github
    }
}


const tommy = new Engineer('tommy', 420, 'email.com', 'github.com')
console.log(tommy.getGithub)
export default Engineer