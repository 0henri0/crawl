import { RoutingControllersOptions } from 'routing-controllers';
import { UserController } from './controllers/user.controller';

const User: RoutingControllersOptions = {
  controllers: [UserController],
};

export default User;
