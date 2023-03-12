// 1.Поясніть своїми словами, як ви розумієте, як працює прототипне наслідування в Javascript
// Kлючове слово extends використовується у класах та вираженнях класу для створення дочірнього.
//
// 2. Для чого потрібно викликати super() у конструкторі класу-нащадка?
// Відповідь: Ключове слово super() використовується для виклику конструктору батьківського класа.

class Employee {
    constructor(name, age, salary) {
        this.name= name;
        this.age = age;
        this.salary = salary;
    }

    get nameSalary() {
        return `${this.name} ${this.salary}`;
    }

    set nameSalary(value) {
        [this.name, this.salary] = value.split(" ");
    }
}

const newWorker = new Employee ('Mike', '24', '3500');

class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this.lang = lang;
    }
    get salaryX3(){
        return `${this.salary*3}`;
    }
}


const Ali = new Programmer ('Jake', '42', '8678', 'Moroccan');
const Ruslan = new Programmer ('Ruslan', '22', '2306', 'Ukrainian');
const Musa = new Programmer ('Musa', '60', '4490', 'Turkish');


console.log(newWorker);
Employee.nameSalary;
console.log(Ali);
console.log(Ruslan);
console.log(Musa);


