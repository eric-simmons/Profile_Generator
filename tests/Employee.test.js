import Employee from "../lib/Employee.js";

//arrange
//act
//assert

describe("Employee constructor", () => {
    test("Returns an Employee object", () => {

        const employee = new Employee()
        expect(typeof employee).toBe('object')
    })
    test("Employee has a name", () => {
        const employee = new Employee()
        employee.setName('employee')
        expect(employee.getName()).toBe('employee')
    })
    test("Employee has an Id", () => {
        const employee = new Employee()
        employee.setId('000')
        expect(employee.getId()).toBe('000')

    })
    test("Employee has an Email", () => {
        const employee = new Employee()
        employee.setEmail('email@email.com')
        expect(employee.getEmail()).toBe('email@email.com')

    })
})