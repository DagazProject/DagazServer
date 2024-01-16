import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class account_type {
    @PrimaryColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    name: string;
}