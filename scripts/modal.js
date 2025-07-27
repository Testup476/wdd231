import { Showdescription, courses } from "./ModalHandler.mjs";


document.addEventListener('DOMContentLoaded', () => {
    const CSE = document.getElementById('CSE');
    const WDD = document.getElementById('WDD');

    if (CSE) {
        CSE.addEventListener('click', () => {
            Showdescription(courses.cse);
        });
    }

    if (WDD) {
        WDD.addEventListener('click', () => {
            Showdescription(courses.wdd);
        });
    }
})
