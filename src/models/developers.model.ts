import { Skill } from "./skill.model";

export class Developers{
constructor(
  public lastName: string,
  public firstName: string,
  public age: number,
  public sexe: string,
  public bio: string,
  public skills: Skill[],
){}
};

