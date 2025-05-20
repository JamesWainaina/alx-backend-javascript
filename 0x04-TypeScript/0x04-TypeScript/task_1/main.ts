
export interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [key: string]: any; //allows additional properties of any type
}

export interface Directors extends Teacher{
    numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string){
    return `${firstName[0]}.${lastName}`;
}

export interface IsStudentClassConstructor{
    new (firstName: string, lastName: string): IStudentClass;
}

export interface IStudentClass{
    workOnHomework(): string;
    displayName():string;
}

export class StudentClass implements IStudentClass{
    private firstName!: string;
    private lastName!: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;   
    }
    workOnHomework(){
        return 'Currently working';
    }
    displayName(){
        return this.firstName;
    }
}
