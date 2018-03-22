import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
    {
        id: "rafael-lucchese",
        nome: "Rafael",
        sobrenome: "Lucchese",
        email: "rafael.lucchese@gmail.com",
        telefone: "(61) 99519-0220",
    },
    {
        id: "jucinei-santos",
        nome: "Jucinei",
        sobrenome: "Santos",
        email: "jucinei.santos@gmail.com",
        telefone: "(61) 99519-0220",
    },
    {
        id: "rafael-lucchese",
        nome: "Rafael",
        sobrenome: "Lucchese",
        email: "rafael.lucchese@gmail.com",
        telefone: "(61) 99519-0220",
    },
    {
        id: "jucinei-santos",
        nome: "Jucinei",
        sobrenome: "Santos",
        email: "jucinei.santos@gmail.com",
        telefone: "(61) 99519-0220",
    },

];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
    return replaceAll(course.title, ' ', '-');
};

class CourseApi {
    static getAllCourses() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
    }

    static saveCourse(course) {
        course = Object.assign({}, course); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCourseTitleLength = 1;
                if (!course.nome.length || !course.sobrenome.length) {
                    reject(`Nome e Sobrenome são obrigatórios.`);
                }

                // if (course.id) {
                //     const existingCourseIndex = courses.findIndex(a => a.id === course.id);
                //     courses.splice(existingCourseIndex, 1, course);
                // } else {
                //     //Just simulating creation here.
                //     //The server would generate ids and watchHref's for new courses in a real app.
                //     //Cloning so copy returned is passed by value rather than by reference.
                    //course.id = generateId(course);
                    //course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
                    course.id = `${course.nome}-${course.sobrenome}`;
                    courses.push(course);
                //}

                resolve(course);
            }, delay);
        });
    }

    static deleteCourse(courseId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfCourseToDelete = courses.findIndex(course => course.id === courseId);
                courses.splice(indexOfCourseToDelete, 1);
                resolve();
            }, delay);
        });
    }


    static getCourse(courseId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingCourseIndex = courses.findIndex(course => course.id === courseId);

                const courseFound = Object.assign({}, courses[existingCourseIndex]);

                resolve(courseFound);

            }, delay);
        });
    }

}

export default CourseApi;
