import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[];

  constructor() {

    this.students = [
      { indeks: 1, ime: 'Pera', prezime: 'Peric' },
      { indeks: 2, ime: 'Mika', prezime: 'Mikic' },
      { indeks: 3, ime: 'Aleksa', prezime: 'Aleksic' },
    ]
  }

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }
}
