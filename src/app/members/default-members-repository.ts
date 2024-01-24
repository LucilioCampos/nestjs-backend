export abstract class DefaultMembersRepository {
  abstract create(
    name: string,
    email: string,
    memberFunction: string,
  ): Promise<void>;
}
