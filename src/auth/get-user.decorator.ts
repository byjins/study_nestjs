import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './db/user.entity';

export const GetUser = createParamDecorator((data, ctx: ExecutionContext): User => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { user } = ctx.switchToHttp().getRequest();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return user;
});
