interface Person {
    firstName:string;
    lastName: string;
    email: string;
    age?: number;
    getFullName: Function
}

var p:Person;
p = {
    firstName:"John",
    lastName: "Doe", 
    email: "johndoe@gmail.com", 
    getFullName: function(){
        return this.firstName + this.lastName;
    }
};



console.log(p.getFullName());