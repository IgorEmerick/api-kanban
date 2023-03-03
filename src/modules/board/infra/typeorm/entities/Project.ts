import { User } from '@modules/user/infra/typeorm/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  name: string;

  @ManyToMany(() => User, user => user.managed_projects)
  @JoinTable({ name: 'project_managers' })
  admins: User[];

  @ManyToMany(() => User, user => user.projects)
  @JoinTable({ name: 'project_members' })
  members: User[];
}
