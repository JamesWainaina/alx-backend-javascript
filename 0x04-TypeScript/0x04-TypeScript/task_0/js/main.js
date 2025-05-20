"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayStudents = void 0;
var student1 = {
    firstName: "James",
    lastName: "Gatheru",
    age: 34,
    location: "Juja",
};
var student2 = {
    firstName: "Michael",
    lastName: "Myers",
    age: 50,
    location: "TRM",
};
var studentList = [
    student1,
    student2,
];
var styleSheet = "\n\thtml {\n\t\tmargin: 0;\n\t\theight: 100%;\n\t}\n\tbody{\n\t\tbox-sizing: border-box;\n\t\tdisplay: flex;\n\t\talign-items:center;\n\t\tjustify-content: center;\n\t\theight: 80%;\n\t\tmargin: 10%;\n\t}\n\ttable {\n\t\tborder-collapse:collapse;\n\t}\n\tthead {\n\t\tfont-weight: bold;\n\t}\n\ttd {\n\t\tpadding: 10px;\n\t\tborder: 1px solid gray;\n\t\tcursor: pointer;\n\t}\n\t\n\ttd: hover {\n\t\tbackground: gainsboro;\n\t}\n\t\n\ttd:nth-child(1) {\n\t\ttext-align: center;\n\t}";
var displayStudents = function (students) {
    var table = document.createElement('table');
    var tableHead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    var tableBody = document.createElement('tbody');
    headerRow.insertAdjacentHTML('beforeend', '<td> FirstName</td');
    headerRow.insertAdjacentHTML('beforeend', '<td>Location</td');
    tableHead.insertAdjacentElement('beforeend', headerRow);
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        var bodyRow = document.createElement('tr');
        bodyRow.insertAdjacentHTML('beforeend', tableHead);
        tableBody.insertAdjacentElement('beforeend', headerRow);
    }
    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);
};
exports.displayStudents = displayStudents;
(0, exports.displayStudents)(studentList);
var styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';
