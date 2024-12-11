let student = {
    name: "Izabella",
    age: 24,
    enrolled: true,
    courses: ['javascript','web dev','algorithm','database','wrti'],
    displayinfo: function () {
    console.log(student.name); // Output: izabella
    console.log(student.age); // Output: 24
    console.log(student.courses);
    student.log(student.displayinfo);
}
}
let jsonstudent = JSON.parse(jsonstudent);
console.log(jsonstudent.name)

let jsonString = JSON.stringify(student);
console.log(jsonstudent)

let {name,age,courses}= student;
console.log(student.name);
console.log(courses);

let scores = [80,86,90,96,94];
console.log(scores);
