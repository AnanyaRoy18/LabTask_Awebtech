var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Put, UploadedFile, UseInterceptors, } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { mkdirSync } from 'fs';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseService } from './course.service';
const uploadDirectory = join(process.cwd(), 'src', 'uploads');
let CourseController = class CourseController {
    courseService;
    constructor(courseService) {
        this.courseService = courseService;
    }
    getAllCourses() {
        return this.courseService.getAllCourses();
    }
    getCourseById(id) {
        return this.courseService.getCourseById(id);
    }
    createCourse(dto) {
        return this.courseService.createCourse(dto);
    }
    updateCourse(id, dto) {
        return this.courseService.updateCourse(id, dto);
    }
    patchCourse(id, dto) {
        return this.courseService.patchCourse(id, dto);
    }
    deleteCourse(id) {
        return this.courseService.deleteCourse(id);
    }
    uploadCourseMaterial(id, file) {
        return this.courseService.uploadCourseMaterial(id, file);
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "getAllCourses", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "getCourseById", null);
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof CreateCourseDto !== "undefined" && CreateCourseDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "createCourse", null);
__decorate([
    Put(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof UpdateCourseDto !== "undefined" && UpdateCourseDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "updateCourse", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof UpdateCourseDto !== "undefined" && UpdateCourseDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "patchCourse", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "deleteCourse", null);
__decorate([
    Post(':id/upload'),
    UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: (req, file, callback) => {
                try {
                    mkdirSync(uploadDirectory, { recursive: true });
                    callback(null, uploadDirectory);
                }
                catch (error) {
                    callback(error, uploadDirectory);
                }
            },
            filename: (req, file, callback) => {
                const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}` +
                    extname(file.originalname).toLowerCase();
                callback(null, uniqueName);
            },
        }),
        limits: {
            fileSize: 2 * 1024 * 1024,
        },
        fileFilter: (req, file, callback) => {
            const allowedExtensions = ['.jpg', '.jpeg', '.png', '.pdf'];
            const extension = extname(file.originalname).toLowerCase();
            const allowedMimeTypes = [
                'image/jpeg',
                'image/png',
                'application/pdf',
            ];
            if (!allowedExtensions.includes(extension) ||
                !allowedMimeTypes.includes(file.mimetype)) {
                return callback(new BadRequestException('Only .jpg, .jpeg, .png and .pdf files are allowed'), false);
            }
            callback(null, true);
        },
    })),
    __param(0, Param('id')),
    __param(1, UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "uploadCourseMaterial", null);
CourseController = __decorate([
    Controller('course'),
    __metadata("design:paramtypes", [typeof (_a = typeof CourseService !== "undefined" && CourseService) === "function" ? _a : Object])
], CourseController);
export { CourseController };
//# sourceMappingURL=course.controller.js.map