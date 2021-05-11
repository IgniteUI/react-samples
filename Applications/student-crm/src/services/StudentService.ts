import { IStudent, Student } from "../business/Student";
import { ISubject } from "../business/Subject";

export class StudentService {

    static genders: string[] = ["male", "female"];
    static maleNames: string[] = ["Kyle", "Oscar", "Ralph", "Mike", "Bill", "Frank", "Howard", "Jack", "Larry", "Pete", "Steve", "Vince", "Mark", "Alex", "Max", "Brian", "Chris", "Andrew", "Martin", "Mike", "Steve", "Glenn", "Bruce"];
    static femaleNames: string[] = ["Gina", "Irene", "Katie", "Brenda", "Casey", "Fiona", "Holly", "Kate", "Liz", "Pamela", "Nelly", "Marisa", "Monica", "Anna", "Jessica", "Sofia", "Isabella", "Margo", "Jane", "Audrey", "Sally", "Melanie", "Greta", "Aurora", "Sally"];
    static lastNames: string[] = ["Adams", "Crowley", "Ellis", "Martinez", "Irvine", "Maxwell", "Clark", "Owens", "Rooney", "Lincoln", "Thomas", "Spacey", "Betts", "King", "Newton", "Fitzgerald", "Holmes", "Jefferson", "Landry", "Newberry", "Perez", "Spencer", "Starr", "Carter", "Edwards", "Stark", "Johnson", "Fitz", "Chief", "Blanc", "Perry", "Stone", "Williams", "Lane", "Jobs", "Adama", "Power", "Tesla"];

    public static getStudents(count: number): IStudent[] {        
        
        const students: Student[] = [];

        for (let i = 0; i < count; i++) {

            const gender: string = this.getRandomGender();
            const firstName: string = this.getRandomFirstName(gender);
            const lastName: string = this.getRandomLastName();
            const classNumber: number = Math.round(this.getRandomNumber(1, 9));

            let student: Student = new Student();
            student.id = this.pad(i + 1, 5);
            student.gender = gender;
            student.name = firstName + " " + lastName;
            student.classNumber = classNumber;

            for (let m = 0; m < 12; m++) {

                const subject: ISubject = {
                    month: m+1,
                    math: Math.round(this.getRandomNumber(40, 100)),
                    languageArts: Math.round(this.getRandomNumber(40, 100)),
                    reading: Math.round(this.getRandomNumber(40, 100)),
                    science: Math.round(this.getRandomNumber(40, 100)),
                    socialStudies: Math.round(this.getRandomNumber(40, 100))
                }

                student.subjects[m] = subject;
            }

            students.push(student);
        }

        return students;
    }

    private static getRandomGender(): string {
        return this.getRandomItem(this.genders);
    }

    private static getRandomFirstName(gender: string): string {
        if (gender === "male") {
            return this.getRandomItem(this.maleNames);
        }
        else {
            return this.getRandomItem(this.femaleNames);
        }
    }

    private static getRandomLastName(): string {
        return this.getRandomItem(this.lastNames);
    }

    private static getRandomItem(array: any[]): any {
        const index = Math.round(this.getRandomNumber(0, array.length - 1));
        return array[index];
    }

    private static getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    private static pad(num: number, size: number) {
        let s = num + "";
        while (s.length < size) {
            s = "0" + s;
        }
        return s;
    }
}