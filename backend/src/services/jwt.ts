import jwt from "jsonwebtoken";

export default {
  async sign(payload: any) {
    const secret: any = process.env.SECRET_AUTH_INTERNAL;
    return jwt.sign(payload, secret, { expiresIn: 86400 });
  },
  async verify(token: any) {
    const secret: any = process.env.SECRET_AUTH_INTERNAL;
    return jwt.verify(token, secret);
  },
};
