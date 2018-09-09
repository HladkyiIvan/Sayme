import { Post } from "./post";

export class PostImage {
    public post: Post;
    public avatar: string;
    // public hasImage:boolean;
    constructor(post,image) {
        this.post=post;
        this.avatar=image;
        // this.hasImage=hasImage;
    }
}