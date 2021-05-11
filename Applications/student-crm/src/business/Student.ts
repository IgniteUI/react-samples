import { ISubject } from "./Subject";

export interface IStudent {

    id: string,
    name: string,
    gender: string,
    classNumber: number
    subjects: ISubject[]
}

export class Student implements IStudent {
    id: string = "";
    name: string = "";
    gender: string = "";
    classNumber: number = 0;
    subjects: ISubject[] = [];
}