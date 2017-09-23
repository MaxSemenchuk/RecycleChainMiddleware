import { AxiosInstance } from 'axios';
import { Connection, Repository } from 'typeorm';
import { InjectConnection, InjectRepositories } from './../utils';
import { User } from './../models';

@InjectConnection
@InjectRepositories
export class BaseController {
  public request: AxiosInstance;
  public connection: Connection;
  public userRepository: Repository<User>;
}
