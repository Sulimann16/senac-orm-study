import { Entity, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Group } from "./Group";
import { Role } from "./Role";

/**
 * Relacionamento N:N entre "groups" e "roles".
 * Todos os usuários de um grupo herdam estes papéis.
 */
@Entity("group_roles")
export class GroupRole {
  @PrimaryColumn({ type: "uuid", name: "group_id" })
  groupId!: string;

  @PrimaryColumn({ type: "uuid", name: "role_id" })
  roleId!: string;

  @ManyToOne(() => Group, (group) => group.groupRoles)
  @JoinColumn({ name: "group_id" })
  group!: Group;

  @ManyToOne(() => Role, (role) => role.groupRoles)
  @JoinColumn({ name: "role_id" })
  role!: Role;

  @CreateDateColumn({ name: "granted_at" })
  grantedAt!: Date;
}
