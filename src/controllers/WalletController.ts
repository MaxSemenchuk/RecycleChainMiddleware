import {
  JsonController,
  Body,
  Get,
  Authorized,
  State,
} from 'routing-controllers';
import * as Boom from 'boom';

import { W3Service } from './../utils';
import { BaseController } from './BaseController';

@JsonController('/wallet')
export class AuthController extends BaseController {

  @Authorized()
  @Get('/balance')
  public async getBalance( @State('userId') userId: string) {
    const balance = await W3Service.getBalance();
    return { balance };
  }

}
