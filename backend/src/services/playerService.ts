import { v4 as uuid } from "uuid";
import { PlayerClass } from "./../models/Player";
import Player from "../models/Player";

export default {
  async newRegister(body: PlayerClass) {
    const newPlayer = new PlayerClass();
    if (!body.password)
      return { erro: "Realizar preenchimento da Senha/Password!" };
    if (!body.nick) return { erro: "Realizar preenchimento do seu Nick!" };
    if (!body.email) return { erro: "Realizar preenchimento do E-mail!" };

    const id: string = uuid();
    newPlayer.id = id;
    newPlayer.email = body.email;
    newPlayer.nick = body.nick;
    newPlayer.password = body.password;

    let resultNewRegister;
    const checkEmail = await Player.findOne({ email: body.email });
    if (!checkEmail) {
      const checkNick = await Player.findOne({ nick: body.nick });
      if (!checkNick) {
        await Player.create(newPlayer)
          .then((result) => {
            resultNewRegister = { sucesso: "Cadastro realizado com sucesso!" };
            console.log(result);
          })
          .catch((err) => {
            resultNewRegister = { erro: "Falha ao realizar ao cadastrar." };
            console.log(err);
          });
        return resultNewRegister;
      }
      return { erro: "Nick existente!" };
    }
    return { erro: "E-mail existente!" };
  },
};
