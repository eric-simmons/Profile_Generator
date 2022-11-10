import Intern from "../lib/Intern.js"

//arrange
//act
//assert

describe("Intern constructor", () => {
    test("Returns an Intern object", () => {

        const intern = new Intern()
        expect(typeof intern).toBe('object')
    })
    test("Intern has a name", () => {
        const intern = new Intern()
        intern.setName('intern')
        expect(intern.getName()).toBe('intern')
    })
    test("Intern has an Id", () => {
        const intern = new Intern()
        intern.setId('000')
        expect(intern.getId()).toBe('000')

    })
    test("Intern has an Email", () => {
        const intern = new Intern()
        intern.setEmail('email@email.com')
        expect(intern.getEmail()).toBe('email@email.com')

    })
    test("Intern has a school", () => {
        const intern = new Intern()
        intern.setSchool('University')
        expect(intern.getSchool()).toBe('University')
    })
})