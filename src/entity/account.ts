import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { users } from "./users";
import { account_type } from "./account_type";

@Entity()
export class account {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column({ nullable: false })
    user_id: number;
    @ManyToOne(type => users)
    @JoinColumn({ name: "user_id" })
    user: users;

    @Index()
    @Column({ nullable: false })
    type_id: number;
    @ManyToOne(type => account_type)
    @JoinColumn({ name: "type_id" })
    type: account_type;

    @Column({ type: "text", nullable: false })
    external_id: string;

    @Column({ nullable: true,  type: "text" })
    username: string;

    @Column({ nullable: true,  type: "text" })
    firstname: string;

    @Column({ nullable: true,  type: "text" })
    lastname: string;
}