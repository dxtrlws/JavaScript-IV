// CODE here for your Lambda Classes
// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
  constructor(properties) {
    this.name = properties.name;
    this.age = properties.age;
    this.location = properties.location;
    this.gender = properties.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
  constructor(properties) {
    super(properties);
    this.specialty = properties.specialty;
    this.favLanguage = properties.favLanguage;
    this.catchPhrase = properties.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} recieves a perfect score on ${subject}`;
  }
}

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
  constructor(properties) {
    super(properties);
    this.previousBackground = properties.previousBackground;
    this.className = properties.className;
    this.favSubjects = properties.favSubjects;
  }
  listsSubjects(subjects) {
    return subjects.toString();
  }
  PRAssigment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

// #### Project Mananger

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManagers extends Instructor {
  constructor(properties) {
    super(properties);
    this.gradClassName = properties.gradClassName;
    this.favInstructor = properties.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugCode(name, student) {
    return `${name} debugs ${student.name}`;
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const amy = new Student({
  name: "Amy",
  location: "Hawaii",
  age: 32,
  gender: "female",
  className: "WebPt4",
  previousBackground: "Travel blogger",
  favSubjects: ["React", "Node", "C#"]
});

const cory = new ProjectManagers({
  name: "Cory",
  location: "Cali",
  age: 42,
  gender: "male",
  favLanguage: "CSS",
  specialty: "Front-end",
  catchPhrase: `Here it is, your moment of zen`,
  gradClassName: "CS2",
  favInstructor: "Mike"
});

//   Instructor
console.log(fred.name);
console.log(fred.speak());
console.log(fred.catchPhrase);
console.log(fred.demo("CSS"));
console.log(fred.grade(amy, "CSS"));

//   Student
console.log(amy.name);
console.log(amy.PRAssigment("react"));
console.log(amy.sprintChallenge("JavaScript"));
console.log(amy.listsSubjects(amy.favSubjects));

// Project Manager
console.log(cory.name);
console.log(cory.speak());
console.log(cory.catchPhrase);
console.log(cory.demo("CSS"));
console.log(cory.grade(amy, "CSS"));
console.log(cory.standUp("WebPt4"));
console.log(cory.debugCode("Cory", amy));

