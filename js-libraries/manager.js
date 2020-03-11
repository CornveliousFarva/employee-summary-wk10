const employee = require("./employee")

let managerInfo = class extends employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getofficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "manager";
    }
}

module.exports = managerInfo