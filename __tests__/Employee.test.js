const Employee = require("../lib/Employee")

describe("Employee", ()=>{
    describe("test Employee's properties", ()=>{
        it("test all properties", ()=>{
            const employee = new Employee('Emp1',1,'Emp1@gmail.com')
            expect(employee.name).toEqual('Emp1')
            expect(employee.id).toEqual(1)
            expect(employee.email).toEqual('Emp1@gmail.com')
        })

    }) 
    describe("test Employee's methods", ()=>{
        it("test all methods", ()=>{
            const employee = new Employee('Emp2',2,'Emp2@gmail.com')
            expect(employee.getName()).toEqual('Emp2')
            expect(employee.getId()).toEqual(2)
            expect(employee.getEmail()).toEqual('Emp2@gmail.com')
            expect(employee.getRole()).toEqual('Employee')
        })

    }) 
})