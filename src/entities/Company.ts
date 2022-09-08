import {
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'

import { User } from './User';

@Entity('companys')
export class Company {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: 'text' })
	cnpj: string

    @Column({ type: 'text' })
	corporatename: string

    @OneToMany(() => User, user => user.company)
        users: User[]
}
