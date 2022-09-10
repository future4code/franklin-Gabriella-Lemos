import * as bcrypt from "bcryptjs";

export class HashManager {
  hash = async (password: string): Promise<string> => {
    const rounds = Number("12");
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(password, salt);
    return result;
  };

  compare = async (password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash);
  };
}
