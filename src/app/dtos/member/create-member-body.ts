import { IsNotEmpty } from 'class-validator';
export class CreateMemberBody {
  @IsNotEmpty()
  name!: string;
  @IsNotEmpty()
  email!: string;
  @IsNotEmpty()
  function!: string;
}
