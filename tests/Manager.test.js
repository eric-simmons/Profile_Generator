import Manager from "../lib/Manager.js"

//arrange
//act
//assert

describe("Manager constructor", () => {
    test("Returns an Manager object", () => {

        const manager = new Manager()
        expect(typeof manager).toBe('object')
    })
    test("Manager has a name", () => {
        const manager = new Manager()
        manager.setName('manager')
        expect(manager.getName()).toBe('manager')
    })
    test("Manager has an Id", () => {
        const manager = new Manager()
        manager.setId('000')
        expect(manager.getId()).toBe('000')

    })
    test("Manager has an Email", () => {
        const manager = new Manager()
        manager.setEmail('email@email.com')
        expect(manager.getEmail()).toBe('email@email.com')

    })
    test("Manager has an Office number", () => {
        const manager = new Manager()
        manager.setOfficeNumber('Office Number 01')
        expect(manager.getOfficeNumber()).toBe('Office Number 01')
    })
})