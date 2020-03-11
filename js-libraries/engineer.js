const employee = require("./employee")

let engineerInfo = class extends employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "enigneer";
    }
}

module.exports = engineerInfo
