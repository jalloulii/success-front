import { Time } from '@angular/common';

export class User {

    constructor(
        private _id?: String,
        private _firstname?: String,
        private _lastname?: String,
        private _email?: String,
        private _password?: String,
        private _solde?: Number,
    ) { }

}

export class Course {

    constructor(
        private _id?: String,
        private _title?: String,
        private _description?: String,
        private _price?: String,
        private _lesson_body?: String,
        private _quiz_question?: String,
        private _quiz_choix_1?: String,
        private _quiz_choix_2?: String,
        private _quiz_choix_3?: String,
        private _quiz_real_reply?: String,
        private _profId?: String,
        private _categorie?: String,
    ) { }

}