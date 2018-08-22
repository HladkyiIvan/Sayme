export class User {
    public id: number;
    public login: string;
    public password: string;
    public bio: string;
    public mail: string;
    public active: boolean;
    public avatar?: Blob;
    public register_code:string;
}
