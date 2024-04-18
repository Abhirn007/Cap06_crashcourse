// Problem 10: countCalculation
const countCalculation = (school) => {
    const { math: { teachers: mathTeachersCount, students: mathStudentsCount }, history: { teachers: historyTeachersCount, students: historyStudentsCount } } = school.departments;
    return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };
  };
  
  console.log(countCalculation(school));
  
  // Problem 11: findTopStudent
  const findTopStudent = (school, courseName) => {
    let topStudent = school.students.reduce((prev, curr) => (prev.scores[courseName] > curr.scores[courseName]) ? prev : curr);
    return { name: topStudent.name, className: topStudent.className, scores: topStudent.scores };
  };
  
  console.log(findTopStudent(school, 'math'));
  
  // Problem 12: addNewDept
  const addNewDept = (school, newDepartment) => {
    const updatedDepartments = { ...school.departments, ...newDepartment };
    return { ...school, departments: updatedDepartments };
  };
  
  const newDepartment = {
    art: { teachers: 2, students: 50 }
  };
  
  console.log(addNewDept(school, newDepartment));
  
  // Problem 13: highestStudentCountDepartment
  const highestStudentCountDepartment = (school) => {
    let highestCount = 0;
    let highestDept = '';
    for (const [dept, { students }] of Object.entries(school.departments)) {
      if (students > highestCount) {
        highestCount = students;
        highestDept = dept;
      }
    }
    return highestDept;
  };
  
  console.log(highestStudentCountDepartment(school));
  
  // Problem 14: Greeting Message
  const generateGreeting = (name, language = 'English') => {
    const greetings = {
      'English': `Hello, ${name}!`,
      'Spanish': `¡Hola, ${name}!`,
      'French': `Bonjour, ${name}!`
    };
    return greetings[language];
  };
  
  console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
  console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
  console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"
  