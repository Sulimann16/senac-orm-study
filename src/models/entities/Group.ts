import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { UserGroup } from "./UserGroup";
import { GroupRole } from "./GroupRole";

/**
 * Representa a tabela "groups" (grupos/times) do sistema RBAC.
 * Facilita gerenciar múltiplos usuários de um mesmo departamento.
 */
@Entity("groups")
export class Group {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 100, unique: true })
  name!: string;

  @Column({ type: "text", nullable: true })
  description!: string | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;

  @OneToMany(() => UserGroup, (userGroup) => userGroup.group)
  userGroups!: UserGroup[];

  @OneToMany(() => GroupRole, (groupRole) => groupRole.group)
  groupRoles!: GroupRole[];
}
