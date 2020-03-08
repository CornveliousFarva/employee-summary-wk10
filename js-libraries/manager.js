const requireInfo = require("./manager")

let managerInfo = class extends requireInfo{
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