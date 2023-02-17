class Main {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
    
    setName(name: string): void {
        this.name = name;
    }
    
    setAge(age: number): void {
        this.age = age;
    }
}

const person = new Main("John", 32);

console.log(person.getName());

