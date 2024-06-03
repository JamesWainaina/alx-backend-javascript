import createIteratorObject from './100-createIteratorObject.js';
export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty string to store the employee names
  let employeeNames = '';

  // Iterate through the reportWithIterator object using a for...of loop
  for (const employee of reportWithIterator) {
    // Append each employee name to the employeeNames string, separated by '|'
    employeeNames += `${employee} | `;
  }

  // Remove the trailing ' | ' from the employeeNames string
  employeeNames = employeeNames.slice(0, -3);

  // Return the final employeeNames string
  return employeeNames;
}

