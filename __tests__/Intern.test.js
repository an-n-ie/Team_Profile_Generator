const Intern = require("../lib/Intern")

describe("Intern", ()=>{
    describe("test Intern's properties", ()=>{
        it("test all properties", ()=>{
            const intern = new Intern('Int1',7,'Int1@gmail.com', 'OSU')
            expect(intern.name).toEqual('Int1')
            expect(intern.id).toEqual(7)
            expect(intern.email).toEqual('Int1@gmail.com')
            expect(intern.school).toEqual('OSU')
        })

    }) 
    describe("test Intern's methods", ()=>{
        it("test all methods", ()=>{
            const intern = new Intern('Int2',8,'Int2@gmail.com', 'OSU')
            expect(intern.getName()).toEqual('Int2')
            expect(intern.getId()).toEqual(8)
            expect(intern.getEmail()).toEqual('Int2@gmail.com')
            expect(intern.getSchool()).toEqual('OSU')
            expect(intern.getRole()).toEqual('Intern')
        })

    }) 
})