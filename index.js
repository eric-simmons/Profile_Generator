import inquirer from "inquirer"
import Employee from "./lib/Employee.js"
import Engineer from "./lib/Engineer.js"
import Intern from "./lib/Intern.js"
import Manager from "./lib/Manager.js"
import Question from "./lib/Questions.js"
import { newEmployeeQuestion } from "./lib/Questions.js"
import { employeeNameQuestion } from "./lib/Questions.js"
import { employeeIdQuestion } from "./lib/Questions.js"
import { employeeEmailQuestion } from "./lib/Questions.js"
import { managerOfficeQuestion } from "./lib/Questions.js"
import { engineerGithubQuestion } from "./lib/Questions.js"
import { internSchoolQuestion } from "./lib/Questions.js"


// const tommy = new Engineer('tommy', 420, 'email.com', 'github.com')
// console.log(tommy.getGithub())





const init = async () => {
    try {
        const answers = await inquirer.prompt(newEmployeeQuestion)
        console.log(answers)
    }
    catch (error) {
        console.log('There was an error', error)
    }
}

init()

// console.log(Employee)
// console.log(Engineer)
// console.log(tommy)
// console.log(Intern)
// console.log(Manager)
// console.log(Questions)
