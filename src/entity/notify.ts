import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class notify {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    user: string;

    @Index({unique: true})
    @Column({ nullable: false })
    session_id: number;

    @Column({ nullable: false })
    game: string;

    @Column({ nullable: false })
    url: string;

    @Column({ nullable: false })
    opponent: string;

    @Column({default: () => "now()"})
    created: Date;

    @Index()
    @Column({ nullable: false })
    scheduled: Date;
}
