const employee = require("./employee")

let internInfo = class extends employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "intern";
    }
}

module.exports = internInfo