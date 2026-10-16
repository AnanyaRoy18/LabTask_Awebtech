var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BadRequestException, Injectable } from '@nestjs/common';
let CourseService = class CourseService {
    getAllCourses() {
        return {
            message: 'All courses fetched successfully',
            data: [],
        };
    }
    getCourseById(id) {
        return {
            message: 'Course fetched successfully',
            id,
        };
    }
    createCourse(dto) {
        return {
            message: 'Course created successfully',
            data: dto,
        };
    }
    updateCourse(id, dto) {
        return {
            message: 'Course updated successfully',
            id,
            data: dto,
        };
    }
    patchCourse(id, dto) {
        return {
            message: 'Course patched successfully',
            id,
            updatedFields: Object.keys(dto),
        };
    }
    deleteCourse(id) {
        return {
            message: 'Course deleted successfully',
            id,
        };
    }
    uploadCourseMaterial(id, file) {
        if (!file) {
            throw new BadRequestException('Please upload a file');
        }
        return {
            message: 'Material uploaded successfully',
            courseId: id,
            filename: file.filename,
            path: `uploads/${file.filename}`,
        };
    }
};
CourseService = __decorate([
    Injectable()
], CourseService);
export { CourseService };
//# sourceMappingURL=course.service.js.map