import Employee from "./Employee.js";

class Engineer extends Employee {
    constructor() {
        super()
        this.github = null
        this.githubPrompt = "What is the new Engineers GitHub URL?"
    }
    getGithub() {
        return this.github
    }
}



export default Engineer