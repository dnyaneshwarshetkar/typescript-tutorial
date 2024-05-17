var p;
p = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    getFullName: function () {
        return this.firstName + this.lastName;
    }
};
console.log(p.getFullName());
