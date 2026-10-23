# University System API — Lab Task 03

NestJS example demonstrating:
- Intra-module DI: CourseController -> CourseService
- Inter-module DI: EnrollmentService -> CourseService
- Circular DI: EnrollmentService <-> NotificationService using forwardRef()

## Setup

```bash
npm install
npm run start:dev
```

API base URL: `http://localhost:3000`

## Endpoints

| Method | Endpoint | Example body |
|---|---|---|
| GET | `/course` | — |
| GET | `/course/101` | — |
| POST | `/course` | `{ "name": "NestJS", "code": "CS301" }` |
| GET | `/enrollment` | — |
| POST | `/enrollment` | `{ "studentName": "John Doe", "courseId": "101" }` |
| POST | `/notification/send` | `{ "studentName": "John Doe", "message": "Welcome!" }` |
| POST | `/notification/check` | `{ "studentName": "John Doe", "courseId": "101" }` |

Responses are demonstration objects; no database is configured.
