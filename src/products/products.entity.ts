import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';



@Entity()
export class Rating {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal', { precision: 3, scale: 1 })
    rate: number;

    @Column()
    count: number;
}


@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column('text')
    description: string;

    @Column()
    category: string;

    @Column()
    image: string;

    @OneToOne(() => Rating, { cascade: true, eager: true })
    @JoinColumn()
    rating: Rating;
}
