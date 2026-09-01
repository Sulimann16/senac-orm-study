import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { UserRole } from "./UserRole";
import { UserGroup } from "./UserGroup";

/**
 * Entidade = mapeamento de uma tabela do banco de dados.
 *
 * Representa a tabela "users" do sistema RBAC.
 *
 * Documentação TypeORM: https://typeorm.io/entities
 */
@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 50, unique: true })
  username!: string;

  @Column({ type: "varchar", length: 255, unique: true })
  email!: string;

  @Column({ type: "varchar", length: 255, name: "password_hash" })
  passwordHash!: string;

  @Column({ type: "boolean", default: true, name: "is_active" })
  isActive!: boolean;

  @Column({ type: "timestamp", nullable: true, name: "last_login" })
  lastLogin!: Date | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  userRoles!: UserRole[];

  @OneToMany(() => UserGroup, (userGroup) => userGroup.user)
  userGroups!: UserGroup[];
}
