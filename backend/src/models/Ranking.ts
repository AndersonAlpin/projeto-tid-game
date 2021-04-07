import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import Player from './Player';

@Entity('ranking')
export default class Ranking {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  daily_score: number;

  @Column()
  total_score: number;

  @OneToOne(() => Player, player => player.ranking)
  @JoinColumn({ name: 'player_id' })
  player: Player;
}