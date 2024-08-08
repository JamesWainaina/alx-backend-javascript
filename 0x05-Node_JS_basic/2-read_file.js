const fs = require('fs');

function countStudents(path) {
  const fieldCounts = {};

  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n').filter((line, index) => index > 0 && line.trim() !== '');

    for (const line of lines) {
      const fields = line.split(',');
      const [firstName,,, field] = fields;

      if (field) {
        if (fieldCounts[field]) {
          fieldCounts[field].count += 1;
          fieldCounts[field].students.push(firstName);
        } else {
          fieldCounts[field] = {
            count: 1,
            students: [firstName],
          };
        }
      }
    }

    console.log(`Number of students: ${lines.length}`);

    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const { count, students } = fieldCounts[field];
        console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
