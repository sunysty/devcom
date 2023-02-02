import {
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

//공통으로 작성되는 BaseEntity
export default abstract class Entity extends BaseEntity {
  @PrimaryGeneratedColumn() //id열이 Board엔티티의 기본키 열임을 알려줌
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
