import inquirer from "inquirer"
import Employee from "./lib/Employee.js"
import Engineer from "./lib/Engineer.js"
import Intern from "./lib/Intern.js"
import Manager from "./lib/Manager.js"
import Question from "./lib/Question.js"
// import questions from "./lib/questions_config.js"
const initQuestion = [
    {
        type: "list",
        name: "employeeType",
        message: "What type of employee would you like to create?",
        choices: ['Manager', 'Engineer', 'Intern']
    }
]
const employeeClasses = {
    "Manager": Manager,
    "Engineer": Engineer,
    "Intern": Intern
}

function getQuestion(prompt) {
    return [
        {
            type: "input",
            name: "response",
            message: prompt,
            choices: null
        }
    ]
}



const init = async () => {
    try {
        const answer = await inquirer.prompt(initQuestion)

        //lookup employee class reference in the employee classes object using the response
        const employee = new employeeClasses[answer.employeeType]()

        const nameAnswer = await inquirer.prompt(getQuestion(employee.namePrompt))
        employee.setName(nameAnswer.response)
        //   employee.name = nameAnswer.response

        const idAnswer = await inquirer.prompt(getQuestion(employee.idPrompt))
        employee.setId(idAnswer.response)

        const emailAnswer = await inquirer.prompt(getQuestion(employee.emailPrompt))
        employee.setEmail(emailAnswer.response)

        if (employee.getRole() === "Manager") {
            const officeNumberAnswer = await inquirer.prompt(getQuestion(employee.officeNumberPrompt))
            employee.officeNumber = officeNumberAnswer.response
        }
        else if (employee.getRole() === "Engineer") {
            const githubAnswer = await inquirer.prompt(getQuestion(employee.githubPrompt))
            employee.github = githubAnswer.response
        }
        else if (employee.getRole() === "Intern") {
            const schoolAnswer = await inquirer.prompt(getQuestion(employee.schoolPrompt))
            employee.school = schoolAnswer.response
        }

        console.log(employee)
    }
    catch (error) {
        console.log('There was an error', error)
    }
}

init()
