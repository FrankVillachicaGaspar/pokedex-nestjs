import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';
export class CreatePokemonDto {
  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  @Min(1)
  no: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;
}
