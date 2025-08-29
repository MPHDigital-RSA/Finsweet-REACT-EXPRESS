import { Link } from 'react-router-dom';
import '../styles/FeaturedPost.css'

const FeaturedPost = ({ posts }) => {

    let post = posts[0];

    return (
        <div className='featured-indiv-post'>
            <div className="image">
                <img src={post.thumbnail} alt="" />
            </div>

            <p className='author-and-date body-1'>By <span>{post.user.name}</span>  |  {post.createdAt.slice(0, 10)} </p>

            <h4>{post.title}</h4>

            <p className="body-1">
                {post.body}
            </p>

            <Link to={`/post/${post._id}`} className='button yellow'>Read More ‣</Link>
        </div>
    )
}

export default FeaturedPost
