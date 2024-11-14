import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Repository } from 'typeorm';
import { Article } from './entities/article.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class ArticleService {

  constructor( @InjectRepository(Article)
  private  articleRepository: Repository<Article>){
  }
  async create(CreateArticleDto : {title : string ,body:string }) : Promise<Article> {
    const NewArticle = this.articleRepository.create(CreateArticleDto)
    return await this.articleRepository.save(NewArticle);
  }

  findAll() {
    return `This action returns all article`;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
