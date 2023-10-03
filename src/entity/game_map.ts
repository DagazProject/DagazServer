import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class game_map {
    @PrimaryColumn()
    id: number;

    @Index()
    @Column({ nullable: true })
    parent_id: number;
    @ManyToOne(type => game_map)
    @JoinColumn({ name: "parent_id" })
    parent: game_map;

    @Column({ type: "text", nullable: true})
    name: string;

    @Column({ type: "text", nullable: true})
    filename: string;

    @Column({ nullable: true })
    selector_value: number;

    @Column({ type: "text", nullable: false})
    preview: string;

    @Column({ type: "text", nullable: true})
    rules: string;

    @Column({ type: "text", nullable: true})
    copyright: string;
}