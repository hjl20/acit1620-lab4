
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

const addCourse = (code, date) => {
    
    const ul = document.querySelector(".ul-course")
    const li = document.createElement("li")
    const courseDiv = document.createElement("div")
    const courseName = document.createElement("a")
    const courseDate = document.createElement("p")
    const courseDesc = document.createElement("p")

    li.classList.add("grid-course")
    courseName.classList.add("course-name")
    courseDate.classList.add("course-date")
    courseDesc.classList.add("course-desc")

    courseName.textContent = code
    courseDate.textContent = date
    courseDesc.textContent = "N/A"

    courseDiv.appendChild(courseName)
    courseDiv.appendChild(courseDate)

    li.appendChild(courseDiv)
    li.appendChild(courseDesc)
    
    ul.appendChild(li)

    console.log("Course successfully added.");
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
        defaultDate = 'Fall 2020'
        courseArray.push(
            {
                code: userNum,
                date: defaultDate,
            }
        )
        // ADD new course to ul
        addCourse(userNum, defaultDate)
    }   
}

courseArray = createCourseArray()
findCourse(courseArray)

