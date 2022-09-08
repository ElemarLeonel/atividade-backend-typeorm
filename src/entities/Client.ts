import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('clients')
export class Client {
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

}