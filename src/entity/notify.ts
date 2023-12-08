import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { users } from "./users";

@Entity()
export class notify {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column({ nullable: false })
    user_id: number;
    @ManyToOne(type => users)
    @JoinColumn({ name: "user_id" })
    user: users;

    @Index({unique: true})
    @Column({ nullable: true })
    session_id: number;

    @Column({ nullable: false })
    game: string;

    @Column({ nullable: false })
    opponent: string;

    @Column({default: () => "now()"})
    created: Date;

    @Index()
    @Column({ nullable: false })
    scheduled: Date;
}
