import { Prisma } from '@prisma/client';
import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}
  create(createAuthorDto: Prisma.AuthorCreateInput) {
    return this.prisma.author.create({
      data: createAuthorDto,
    });
  }

  findAll() {
    return this.prisma.author.findMany();
  }

  findOne(id: number) {
    return this.prisma.author.findUnique({
      where: { id },
    });
  }

  update(id: number, updateAuthorDto: Prisma.AuthorUpdateInput) {
    return this.prisma.author.update({
      data: updateAuthorDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.author.delete({
      where: { id },
    });
  }
}
