import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";
import { Role } from "./Role";

/**
 * Relacionamento N:N entre "users" e "roles".
 * Cada linha concede um papel (role) a um usuário.
 */
@Entity("user_roles")
export class UserRole {
  @PrimaryColumn({ type: "uuid", name: "user_id" })
  userId!: string;

  @PrimaryColumn({ type: "uuid", name: "role_id" })
  roleId!: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user!: User;

  @ManyToOne(() => Role)
  @JoinColumn({ name: "role_id" })
  role!: Role;

  @CreateDateColumn({ name: "granted_at" })
  grantedAt!: Date;

  @Column({ type: "uuid", nullable: true, name: "granted_by" })
  grantedBy!: string | null;

  @ManyToOne(() => User)
  @JoinColumn({ name: "granted_by" })
  grantedByUser!: User | null;
}