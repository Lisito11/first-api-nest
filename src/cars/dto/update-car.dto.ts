import { IsString, IsUUID, IsOptional } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  readonly id: string;

  @IsString({ message: `The brand most be a cool a string` })
  @IsOptional()
  readonly brand: string;

  @IsString()
  @IsOptional()
  readonly model: string;
}
