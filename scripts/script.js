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
    // TODO: get li class=gridcourse elements to make array
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
    for (course of courseList) {
        if (course.code.includes(userNum)) {
            console.log(`Yes I am taking the course: ${course.code} - ${course.name}`);
            //TODO: get element and add green-bgcolor class
            // Get the     
            //courseItems = document.getElementsByClassName("grid-course")

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
}

courseArray = createCourseArray()
// findCourse(courseArray)
// findCourse(courseList)

