import { Entity, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Role } from "./Role";
import { Permission } from "./Permission";

/**
 * Relacionamento N:N entre "roles" e "permissions".
 * Cada linha concede uma permissão a um papel.
 */
@Entity("role_permissions")
export class RolePermission {
  @PrimaryColumn({ type: "uuid", name: "role_id" })
  roleId!: string;

  @PrimaryColumn({ type: "uuid", name: "permission_id" })
  permissionId!: string;

  @ManyToOne(() => Role)
  @JoinColumn({ name: "role_id" })
  role!: Role;

  @ManyToOne(() => Permission)
  @JoinColumn({ name: "permission_id" })
  permission!: Permission;

  @CreateDateColumn({ name: "granted_at" })
  grantedAt!: Date;
}