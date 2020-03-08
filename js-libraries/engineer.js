const requireInfo = require("./engineer")

let engineerInfo = class extends requireInfo{
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
