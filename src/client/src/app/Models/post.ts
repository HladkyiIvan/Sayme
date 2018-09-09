export class Post {
    public id: number;
    public message: string;
    public id_user: number;
    public post_date: Date;
    public username: string;
    public avatar?: Blob;
    public is_changing: boolean;
}
