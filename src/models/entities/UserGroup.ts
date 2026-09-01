import { Entity, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Group } from "./Group";

/**
 * Relacionamento N:N entre "users" e "groups".
 */
@Entity("user_groups")
export class UserGroup {
  @PrimaryColumn({ type: "uuid", name: "user_id" })
  userId!: string;

  @PrimaryColumn({ type: "uuid", name: "group_id" })
  groupId!: string;

  @ManyToOne(() => User, (user) => user.userGroups)
  @JoinColumn({ name: "user_id" })
  user!: User;

  @ManyToOne(() => Group, (group) => group.userGroups)
  @JoinColumn({ name: "group_id" })
  group!: Group;

  @CreateDateColumn({ name: "joined_at" })
  joinedAt!: Date;
}
