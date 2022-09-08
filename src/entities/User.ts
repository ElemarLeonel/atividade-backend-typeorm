import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
    JoinColumn
} from 'typeorm'

import { Company } from './Company'
//verificar import do Schedule
import { Schedule } from './schedule'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn("uuid")
    id: string 

	@Column({ type: 'text' })
	name: string

	@Column({ type: 'text' })
	email: string

    @Column({ type: 'text' })
    password: string

    @Column()
    isActive: boolean

	@OneToMany(() => Schedule, schedule => schedule.user)
        schedules: Schedule[]

    @ManyToOne(() => Company, company => company.users)
	@JoinColumn({ name: 'company_id' })
	company: Company

}