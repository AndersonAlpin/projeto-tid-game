import { Document, Model, model, Schema } from "mongoose";
import bcrypt from 'bcryptjs';

/**
 * Interface to model the Player Schema for TypeScript.
 * @param id:string
 * @param nick:string
 * @param email:string
 * @param password:string
 */
export interface IPlayer extends Document {
  id: string;
  email: string;
  password: string;
  nick: string;
}

export class PlayerClass {
  id:string;
  nick: string;
  email: string;
  password: string;
  
}

const playerSchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  nick: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

playerSchema.pre<IPlayer>("save", function(next) {
  const player = this;
  if(player.password) player.password = bcrypt.hashSync(player.password, 10);
  next();
});

const Player: Model<IPlayer> = model("Player", playerSchema);

export default Player;