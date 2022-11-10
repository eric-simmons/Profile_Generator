import Employee from "./Employee.js";

class Engineer extends Employee {
    constructor() {
        super()
        this.github = null
        this.githubPrompt = "What is the new Engineers GitHub URL?"
    }
}
Engineer.prototype.setGithub = function(github){
    this.github = github
}
Engineer.prototype.getGithub = function(){
    return this.github
}


export default Engineer