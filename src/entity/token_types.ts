import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class token_types {
    @PrimaryColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    name: string;
}