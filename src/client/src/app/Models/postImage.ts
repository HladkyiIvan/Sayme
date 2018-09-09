import { Post } from "./post";

export class PostImage {
    public post: Post;
    public avatar: string;
    constructor(post,image) {
        this.post=post;
        this.avatar=image;
        
    }
}