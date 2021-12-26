class EmployeePayRollData{
    id;
    salary;
    gender;
    starData;

    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.starData=param[4];

    }
    get name() {return this._name};
    set name(name) {this._name=names};
    let nameRegex=Regex('^[A-Z]{1}[a-Z]{3,5}$');
    if(nameRegex.test(name))
    this._name=name;
    else throw 'Name is Incorrect';
}


    tostring(){
        return "id="+this.id+", name= "+this.name+", salary="+this.salary;

    }
    }
    let EmployeePayRollData=new EmployeePayRollData(1,"Mark",3000);
    console.log(EmployeePayRollData.tostring());
    try{
    EmployeePayRollData.name="john";
    console.log(EmployeePayRollData.toString());
    }
    catch(e){
        console.error(e);
    }

