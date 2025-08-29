
import { Link } from 'react-router-dom'

const PostCard1 = ({ post }) => {
    return (
        <Link className="post" to={`/post/${post._id}`}>
            <div className="post-image">
                <img src={post.thumbnail} alt="" width={390} />
            </div>

            <div className="post-info">
                <div className="cap-1">{post.category}</div>
                <h2>{post.title}</h2>
                <p className="body-1">
                    {post.body}
                </p>
            </div>
        </Link>
    )
}

export default PostCard1
