# Full Stack API

Today we are going to build a full-stack API from scratch.

## Description

We will be building an API that can manage evening courses, participants, and faculty at UW. That means we should be able to:

- Create new courses
- Create and assign students to a course
- Create and assign faculty to a course

### Data & Fields

We will want to be able to capture the following information:

We'll create a Course, Student, Faculty Model

#### Courses

- Name of the course
- Start Date for the course
- End Date for the course
- Location including building address and room number

#### Students

- First and last name
- Preferred name or nickname
- Email address

#### Faculty

- First and last name
- Preferred name or nickname
- Email address
- Role

## Features

In addition to basic CRUD operations, we will also want to be able to:

- Provide an endpoint for a course that returns a random student to call on during class
  * GET /courses/:id/students/random
    X /randomStudent/:courseId -- hard to tell the pattern here
- Provide an endpoint that will mark attendance for a student for a specified date
  * PATCH /students/:id

### API design?

Routes

CRUD - create, read, update, delete
"RESTful" API Design, representation state transfer
status code, http verb, organize routes around actions

GET ALL - GET - /books - 200 (not /book or /getAllBooks)
GET ONE - GET - /books/:id - 200 (follow a pattern or convention, always plural)
  * CAN'T FIND IT - 404
CREATE - POST - /books - 201
  * VALIDATION ERROR - 400/422
UPDATE - PUT OR PATCH - /books/:id - 200
  * PUT -> Assume and/or validate for the entire entity
  * PATCH -> Assume one or more valid fields -- depends on what you're making, maybe high traffic
  * VALIDATION ERROR - 400/422
  * CAN'T FIND IT - 404 (don't create new stuff)
DELETE - DELETE - /books/:id - 200
  * CAN'T FIND IT - 404

### Data Structure?

How do we structure our data? What is the API about? This API is about courses

Courses
-students
-faculty

Courses
-members
--role: student/TA

courses : {
    name - string
    start - date
    end - date
    location : {
        address - string
        room - number
    }
    faculty : []
    students : []
}

faculty : {
    first - string
    last - string
    email - string
    role - string
}

student : {
    first - string
    last - string
    email - string
}