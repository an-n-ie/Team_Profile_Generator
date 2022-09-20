const Engineer = require("../lib/Engineer")

describe("Engineer", ()=>{
    describe("test Engineer's properties", ()=>{
        it("test all properties", ()=>{
            const engineer = new Engineer('Eng1',5,'Eng1@gmail.com', 'Eng1git')
            expect(engineer.name).toEqual('Eng1')
            expect(engineer.id).toEqual(5)
            expect(engineer.email).toEqual('Eng1@gmail.com')
            expect(engineer.github).toEqual('Eng1git')
        })

    }) 
    describe("test Engineer's methods", ()=>{
        it("test all methods", ()=>{
            const engineer = new Engineer('Eng2',6,'Eng2@gmail.com', 'Eng2git')
            expect(engineer.getName()).toEqual('Eng2')
            expect(engineer.getId()).toEqual(6)
            expect(engineer.getEmail()).toEqual('Eng2@gmail.com')
            expect(engineer.getGithub()).toEqual('Eng2git')
            expect(engineer.getRole()).toEqual('Engineer')
        })

    }) 
})