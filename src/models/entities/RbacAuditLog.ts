import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Role } from "./Role";
import { Permission } from "./Permission";

/**
 * Representa a tabela "rbac_audit_logs".
 * Registra alterações de acesso (concessão/revogação de papéis e permissões).
 */
@Entity("rbac_audit_logs")
export class RbacAuditLog {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "uuid", nullable: true, name: "user_id" })
  userId!: string | null;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user!: User | null;

  @Column({ type: "varchar", length: 50, name: "action_type" })
  actionType!: string;

  @Column({ type: "uuid", nullable: true, name: "target_user_id" })
  targetUserId!: string | null;

  @ManyToOne(() => User)
  @JoinColumn({ name: "target_user_id" })
  targetUser!: User | null;

  @Column({ type: "uuid", nullable: true, name: "target_role_id" })
  targetRoleId!: string | null;

  @ManyToOne(() => Role)
  @JoinColumn({ name: "target_role_id" })
  targetRole!: Role | null;

  @Column({ type: "uuid", nullable: true, name: "target_permission_id" })
  targetPermissionId!: string | null;

  @ManyToOne(() => Permission)
  @JoinColumn({ name: "target_permission_id" })
  targetPermission!: Permission | null;

  @Column({ type: "varchar", length: 45, nullable: true, name: "ip_address" })
  ipAddress!: string | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}
