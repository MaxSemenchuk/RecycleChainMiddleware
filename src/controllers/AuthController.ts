import {
  JsonController,
  Body,
  Post,
} from 'routing-controllers';
import * as Boom from 'boom';

import { BaseController } from './BaseController';
import { Login } from './../validation';
import { TokenService, PasswordService } from './../utils';
import { User as ValidatedUser } from './../validation';
import { User } from './../models';

@JsonController('/auth')
export class AuthController extends BaseController {

  @Post('/signin')
  public async signin( @Body() credentials: Login) {
    const user = await this.userRepository.findOne({ where: { email: credentials.email } });
    if (!user || PasswordService.comparePassword(user.password, credentials.password)) {
      throw Boom.unauthorized();
    } else {
      const token = TokenService.encode({ userId: user.id });
      return { token };
    }
  }

  @Post('/signup')
  public async signup( @Body() user: ValidatedUser) {
    return await this.userRepository.persist(new User(user));
  }

}
