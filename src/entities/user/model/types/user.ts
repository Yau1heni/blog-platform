export type UserType = {
  id: string
  username: string
  avatar?: string;
}

export type UserSchema = {
  authDada?: UserType
  inited: boolean
}
