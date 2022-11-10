import Engineer from "../lib/Engineer.js"

//arrange
//act
//assert

describe("Engineer constructor", () => {
    test("Returns an Engineer object", () => {

        const engineer = new Engineer()
        expect(typeof engineer).toBe('object')
    })
    test("engineer has a name", () => {
        const engineer = new Engineer()
        engineer.setName('engineer')
        expect(engineer.getName()).toBe('engineer')
    })
    test("engineer has an Id", () => {
        const engineer = new Engineer()
        engineer.setId('000')
        expect(engineer.getId()).toBe('000')

    })
    test("engineer has an Email", () => {
        const engineer = new Engineer()
        engineer.setEmail('email@email.com')
        expect(engineer.getEmail()).toBe('email@email.com')

    })
    test("engineer has a github", () => {
        const engineer = new Engineer()
        engineer.setGithub('github.com/engineer')
        expect(engineer.getGithub()).toBe('github.com/engineer')
    })
})