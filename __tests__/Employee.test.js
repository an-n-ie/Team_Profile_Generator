const Employee = require("../lib/Employee")
describe("Employee", ()=>{
    describe("test Employee's properties", ()=>{
        const employee = new Employee('Annie',1,'annie@gmail.com')
        expect(employee.name).toEqual('Annie')
        expect(employee.id).toEqual(1)
        expect(employee.email).toEqual('annie@gmail.com')
    }) 
    describe("test Employee's methods", ()=>{
        const employee = new Employee('Will',2,'will@gmail.com')
        expect(employee.name).toEqual('Will')
        expect(employee.id).toEqual(2)
        expect(employee.email).toEqual('will@gmail.com')
    }) 
})