import createReportObject from './12-createReportObject.js';
export default function createIteratorObject(report){
  //Generator function to yiels each employee
  function* employeeIterator(){
    // iterate over each department in the report
    for (const department in report.allEmployees) {
      const employees = report.allEmployees[department];
      //Iterate over each employee in the department
      for (const employee of employees){
        yield employee;
      }
    }
   }
   return {
     [Symbol.iterator]:employeeIterator
   };
}
