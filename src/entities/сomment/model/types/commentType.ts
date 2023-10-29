import { UserType } from 'entities/user';

export type CommentType = {
    id: string;
    user: UserType;
    text: string;
}
