class Company{
    constructor(){
        this.department = {};
    }

    addEmployee(name, salary, position, department){
        salary = Number(salary);
        if(!name || !salary || !position || !department){
            throw new Error("Invalid input!");
        }else if(Number(salary) < 0){
            throw new Error("Invalid input!");
        }

        if(!this.department[department]){
            this.department[department] = {
                avg: 0,
                sumSalary: 0,
                employees: []
            };
        }
        this.department[department].employees.push({name, salary, position});
        this._updateDepInfo(department, salary);
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    _updateDepInfo(department, salary){
        let curDep = this.department[department]
        curDep.sumSalary += salary;
        curDep.avg = curDep.sumSalary / curDep.employees.length;
    }

    bestDepartment(){
        let bestDepArr = this._findBestDep();
        let buff = `Best Department is: ${bestDepArr[0]}\n`;
        buff += `Average salary: ${bestDepArr[1].avg.toFixed(2)}\n`;

        bestDepArr[1].employees.sort((emp1, emp2) => {
            return emp2.salary - emp1.salary || emp1.name.localeCompare(emp2.name);
        }).forEach(emp => buff += `${emp.name} ${emp.salary} ${emp.position}\n`);
        

        return buff.trim();
    }

    _findBestDep(){
        return Object.entries(this.department).sort((a, b) => b[1].avg - a[1].avg)[0];
    }

}