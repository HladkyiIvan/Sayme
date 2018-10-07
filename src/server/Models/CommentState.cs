using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class CommentState
    {
        public CommentState(long postid, long lastid)
        {
            this.postId = postid;
            this.lastCommentId = lastid;
        }

        public long postId { get; set; }
        public long lastCommentId { get; set; }

    }
}
