import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

/*
 Representa a tabela "permissions" do sistema RBAC.
Ex: 'article:create', 'user:delete'.
 */
@Entity("permissions")
export class Permission {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 100, unique: true })
  name!: string;

  @Column({ type: "varchar", length: 50 })
  resource!: string;

  @Column({ type: "varchar", length: 50 })
  action!: string;

  @Column({ type: "text", nullable: true })
  description!: string | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}