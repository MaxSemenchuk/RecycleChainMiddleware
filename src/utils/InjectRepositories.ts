import { DataProvider } from './DataProvider';
import { User } from '../models';

export function InjectRepositories<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    protected userRepository = DataProvider.connection.getRepository(User);
  };
}
