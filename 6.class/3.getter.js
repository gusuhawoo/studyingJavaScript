// Accessor Property
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('suha', 'kim');
student.firstName = 'yaya';
console.log(student.firstName);
console.log(student.fullName);
student.fullName = 'lee sara';

// 1.
// const student = new Student('suha', 'kim');
// console.log(student.fullName);

// class Student {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   fullName() {
//     return `${this.lastName} ${this.firstName}`;
//   }
// }

// 2.
// const student = new Student('suha', 'kim');
// console.log(student.fullName());

// class Student {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.fullName = `${this.lastName} ${this.firstName}`;
//   }
//   // fullName() {
//   //   return `${this.lastName} ${this.firstName}`;
//   // }
// }

// const student = new Student('suha', 'kim');
// console.log(student.fullName);
