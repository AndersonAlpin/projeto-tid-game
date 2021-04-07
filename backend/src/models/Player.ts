import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import Ranking from './Ranking';

@Entity('players')
export default class Player {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nick: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Ranking, ranking => ranking.player, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'player_id' })
  ranking: Ranking;
}