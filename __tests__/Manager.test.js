const Manager = require("../lib/Manager")

describe("Manager", ()=>{
    describe("test Manager's properties", ()=>{
        it("test all properties", ()=>{
            const manager = new Manager('Man1',3,'Man1@gmail.com', 33)
            expect(manager.name).toEqual('Man1')
            expect(manager.id).toEqual(3)
            expect(manager.email).toEqual('Man1@gmail.com')
            expect(manager.officeNumber).toEqual(33)
        })

    }) 
    describe("test Manager's methods", ()=>{
        it("test all methods", ()=>{
            const manager = new Manager('Man2',4,'Man2@gmail.com')
            expect(manager.getName()).toEqual('Man2')
            expect(manager.getId()).toEqual(4)
            expect(manager.getEmail()).toEqual('Man2@gmail.com')
            expect(manager.getRole()).toEqual('Manager')
        })

    }) 
})