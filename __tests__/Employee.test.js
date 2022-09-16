const Employee = require("../lib/Employee")
describe("Employee", ()=>{
    describe("test Employee's properties", ()=>{
        it("test all properties", ()=>{
            const employee = new Employee('Annie',1,'annie@gmail.com')
            expect(employee.name).toEqual('Annie')
            expect(employee.id).toEqual(1)
            expect(employee.email).toEqual('annie@gmail.com')
        })

    }) 
    describe("test Employee's methods", ()=>{
        it("test all methods", ()=>{
            const employee = new Employee('Will',2,'will@gmail.com')
            expect(employee.getName()).toEqual('Will')
            expect(employee.getId()).toEqual(2)
            expect(employee.getEmail()).toEqual('will@gmail.com')
            expect(employee.getRole()).toEqual('Employee')
        })

    }) 
})