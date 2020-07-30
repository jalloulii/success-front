import { Time } from '@angular/common';

export class User {

    constructor(
        private _id?: String,
        private _firstname?: String,
        private _lastname?: String,
        private _email?: String,
        private _password?: String,
    ) { }

}

export class Course {

    constructor(
        private _id?: String,
        private _title?: String,
        private _description?: String,
        private _price?: String,
        private _instructor?: String,
        private _lesson_body?: String,
    ) { }

}