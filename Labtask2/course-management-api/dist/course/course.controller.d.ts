import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseService } from './course.service';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getAllCourses(): any;
    getCourseById(id: string): any;
    createCourse(dto: CreateCourseDto): any;
    updateCourse(id: string, dto: UpdateCourseDto): any;
    patchCourse(id: string, dto: UpdateCourseDto): any;
    deleteCourse(id: string): any;
    uploadCourseMaterial(id: string, file: Express.Multer.File | undefined): any;
}
