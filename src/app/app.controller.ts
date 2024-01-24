import { Body, Controller, Post } from '@nestjs/common';
import { CreateMemberBody } from './dtos/member/create-member-body';
import { DefaultMembersRepository } from './members/default-members-repository';

@Controller()
export class AppController {
  constructor(
    private readonly defaultMembersRepository: DefaultMembersRepository,
  ) {}

  @Post()
  async createMember(@Body() body: CreateMemberBody) {
    const { name, email, function: memberFunction } = body;
    const member = await this.defaultMembersRepository.create(
      name,
      email,
      memberFunction,
    );
    return member;
  }
}
