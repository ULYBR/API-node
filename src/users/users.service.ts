import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UsersDocument } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UsersDocument>) {}

  async create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto);
  }

  async findAll() {
    return this.userModel.find();
  }

  async findOne(id: number) {
    return this.userModel.findById(id) ;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({
      _id: id,
    },
    {
      $set: updateUserDto
    },
    {
      new: true,
    }

    )
  }

  async remove(id: number) {
    return this.userModel.deleteOne({
      _id: id
      
    }).exec()
  }
}
