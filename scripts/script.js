const courseList = [
    {
        code: "ACIT 1620",
        name: "Web Fundamental Technologies",
    },
    {
        code: "COMM 1116",
        name: "Business Communications 1",
    },
    {
        code: "MATH 1310",
        name: "Technical Math for IT",
    },
]

do {
    userNum = prompt("Enter a course number: ");
} while (isNaN(userNum) || userNum.length != 4)

inList = false;
for (course of courseList) {
    if (course.code.includes(userNum)) {
        console.log(`Yes I am taking the course: ${course.code} - ${course.name}`);
        inList = true;
    }
}
if (!inList) {
    courseList.push(
        {
            code: userNum,
            name: null,
        }
    );
    console.log("Course successfully added.");
}

