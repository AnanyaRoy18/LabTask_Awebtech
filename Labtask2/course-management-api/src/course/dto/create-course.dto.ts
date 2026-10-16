
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  Max,
  Min,
} from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/\S/, { message: 'name cannot contain only blank spaces' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/\S/, { message: 'code cannot contain only blank spaces' })
  code: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/\S/, {
    message: 'instructor cannot contain only blank spaces',
  })
  instructor: string;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(6)
  credits: number;

  @IsOptional()
  @IsString()
  description?: string;
}
