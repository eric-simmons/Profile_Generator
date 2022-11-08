
class Question {
    constructor(type, name, question, choices) {
        this.type = type
        this.name = name
        this.question = question
        this.choices = choices
    }
}

export const newEmployeeQuestion = new Question("list", "employeeType", "What type of employee would you like to create?", ['Manager', 'Engineer', 'Intern'])

export const employeeNameQuestion = new Question("input", "employeeName", "What is the name of the new Employee?", null)

export const employeeIdQuestion = new Question("input", "employeeId", "What is the Id of the new Employee?", null)

export const employeeEmailQuestion = new Question("input", "employeeEmail", "What is the Email Address of the new employee?", null)

export const managerOfficeQuestion = new Question("input", "managerOffice", "What is the Office number of the new Manager?", null)

export const engineerGithubQuestion = new Question("input", "engineerGithub", "What is the Github URL for the new Engineer?", null)

export const internSchoolQuestion = new Question("input", "internSchool", "What is the school that the new Intern is attending?", null)

export default Question





