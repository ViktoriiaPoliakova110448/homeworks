var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    }
];

const validation = /^(?:[a-zA-Z0-9]+|[a-zA-Z0-9]+\.[a-zA-Z0-9]+)@(gmail\.com|yahoo\.com)$/;
const trusted  =  arr.filter(obj => validation.test(obj.email));

console.log(trusted);