import { Exclude } from 'class-transformer';
import { IsEmail, Length } from 'class-validator';
import {
  Entity,
  Column,
  BaseEntity,
  Index,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('users') //CREATE TABLE user와 같다.
export default class User extends BaseEntity {
  @Index() //특정인덱스를 더 빨리찾을 수 있다. 쿼리속도를 높여준다.
  @IsEmail(undefined, { message: '이메일 형식에 맞지 않습니다.' })
  @Length(1, 255, { message: '이메일 주소는 비워둘 수 없습니다.' })
  @Column({ unique: true }) //다른 열과 구분짓기 위함이다.
  email: string;

  @Index()
  @Length(3, 32, { message: '사용자 이름은 3자 이상이어야 합니다.' })
  @Column({ unique: true })
  userName: string;

  @Exclude()
  @Length(6, 255, { message: '비밀번호는 6자리 이상이어야 합니다.' })
  @Column()
  password: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Vote, (vote) => vote.user)
  votes: Vote[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 6);
  }
}
