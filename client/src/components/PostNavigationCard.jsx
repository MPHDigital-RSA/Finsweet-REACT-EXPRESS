import '../styles/PostNavigationCard.css'
import { Link } from 'react-router-dom'


const PostNavigationCard = ({ post }) => {


    return (
        <Link className='post-navigation-card' to={`/post/${post._id}`}>
            <p className='author-and-date body-1'>By <span>{post.user.name}</span>  |  {post.createdAt.slice(0, 10)} </p>
            <h4>{post.title}</h4>
        </Link>
    )
}

export default PostNavigationCard
