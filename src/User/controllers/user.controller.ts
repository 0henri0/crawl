import { Request, Response } from 'express';
import { Controller, Get, Req, Res } from 'routing-controllers';
import { User } from '../models/User';
import { AppDataSource } from '@src/Framework/models';
import { IsNull, Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
dotenv.config();

@Controller('/users')
export class UserController {
  userRepository: Repository<User> = AppDataSource.getRepository(User);
  @Get('/')
  async index(@Req() req: Request, @Res() res: Response) {
    // const users = await this.userRepository.find({
    //   where: {
    //     deleted_at: IsNull(),
    //   },
    // });
    // console.log(process.env.UV_THREADPOOL_SIZE)
    const hashPassword = await bcrypt.hash('users.password', 10);

    // console.log(users);

    // console.log(os.cpus());

    return res.json(hashPassword);
  }
}
