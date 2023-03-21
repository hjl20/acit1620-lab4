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

const createCourseArray = () => {
    const courseList = []
    courseNames = document.getElementsByClassName("course-name")
    courseDates = document.getElementsByClassName("course-date")
    for (let i = 0; i < courseNames.length; i++) {
        courseList.push(
            {
                code: courseNames[i].textContent.trim(),
                date: courseDates[i].textContent
            }
        )
    }

    return courseList
} 

const findCourse = courseList => {

    do {
        userNum = prompt("Enter a course number: ");
    } while (isNaN(userNum) || userNum.length != 4)
    
    inList = false;
    for (let i = 0; i < courseList.length; i++) {
        if (courseList[i].code.includes(userNum)) {
            console.log(`Yes I am taking the course: ${courseList[i].code}`);
            // Get HTML element and add green-bgcolor class
            courseItems = document.getElementsByClassName("grid-course")
            courseItems[i].classList.add("green-bgcolor")            
            inList = true;
        }
    }

    if (!inList) {
        courseArray.push(
            {
                code: userNum,
                name: null,
            }
        );
        console.log("Course successfully added.");
    }   
}

courseArray = createCourseArray()
findCourse(courseArray)

