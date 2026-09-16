const API_URL = "http://127.0.0.1:8000/api/students/";

const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");


// GET - Display all students
function loadStudents() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            studentList.innerHTML = "";

            data.forEach(student => {
                studentList.innerHTML += `
                    <tr>
                        <td>${student.id}</td>
                        <td>${student.name}</td>
                        <td>${student.department}</td>
                        <td>${student.email}</td>
                        <td>${student.phone}</td>
                        <td>${student.year}</td>
                        <td>
                            <button onclick="deleteStudent(${student.id})">
                                Delete
                            </button>
                        </td>
                    </tr>
                `;
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
}


// POST - Add student
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        year: parseInt(document.getElementById("year").value)
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
    .then(response => response.json())
    .then(data => {
        alert("Student added successfully!");

        form.reset();
        loadStudents();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Failed to add student");
    });
});


// DELETE - Delete student
function deleteStudent(id) {

    if (!confirm("Are you sure you want to delete this student?")) {
        return;
    }

    fetch(`${API_URL}${id}/`, {
        method: "DELETE"
    })
    .then(response => {

        if (response.ok || response.status === 204) {
            alert("Student deleted successfully!");
            loadStudents();
        } else {
            alert("Failed to delete student");
        }

    })
    .catch(error => {
        console.error("Error:", error);
    });
}


// Load students when page opens

// GET - Display all students
function loadStudents() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            studentList.innerHTML = "";
            data.forEach(student => {
                studentList.innerHTML += `
                  <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.department}</td>
                    <td>${student.email}</td>
                    <td>${student.phone}</td>
                    <td>${student.year}</td>
                    <td><button onclick="editStudent(${student.id}, '${student.name}', '${student.department}', '${student.email}', '${student.phone}', ${student.year})">Edit</button>
                    <button onclick="deleteStudent(${student.id})">Delete</button>
                    </td>
                  </tr>`;
            });
        });
}

let editId = null;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const studentData = {
        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        year: document.getElementById("year").value
    };

    if (editId) {
        fetch(`${API_URL}${editId}/`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(studentData)
        })
        .then(res => res.json())
        .then(() => {
            editId = null;
            form.reset();
            loadStudents();
        });
    } else {
        fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(studentData)
        })
        .then(res => res.json())
        .then(() => {
            form.reset();
            loadStudents();
        });
    }
});

function editStudent(id, name, dept, email, phone, year) {
    document.getElementById("name").value = name;
    document.getElementById("department").value = dept;
    document.getElementById("email").value = email;
    document.getElementById("phone").value = phone;
    document.getElementById("year").value = year;
    editId = id;
}

// DELETE - Remove student
function deleteStudent(id) {
    fetch(`${API_URL}${id}/`, { method: "DELETE" })
    .then(() => loadStudents());
}

// Page load aana odane list kaatanum
loadStudents();