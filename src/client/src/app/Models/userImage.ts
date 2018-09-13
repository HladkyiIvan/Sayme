import { User } from "./user";

export class UserImage {
    public user: User;
    public avatar: string;
    constructor(user,image) {
        this.user=user;
        this.avatar=image;
    }
}