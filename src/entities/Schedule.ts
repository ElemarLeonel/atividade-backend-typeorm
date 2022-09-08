import {
	Column,
	Entity,
	ManyToOne,
    OneToOne,
    JoinColumn,
	PrimaryGeneratedColumn,
} from 'typeorm'

import { User } from './User';
import { Client } from './Client';

@Entity('schedules')
export class Schedule {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: 'date' })
	appointmentdate: string

    @Column({ type: 'time' })
	appointmenttime: string

    @ManyToOne(() => User, user => user.schedules)
	@JoinColumn({ name: 'user_id' })
	user: User

    @OneToOne(() => Client)
    @JoinColumn()
    clients: Client 
    
    @Column({ type: 'boolean'})
    status: string
}
