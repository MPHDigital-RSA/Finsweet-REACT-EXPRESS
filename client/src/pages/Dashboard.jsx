import '../styles/Dashboard.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import placeholderAvatar from '../assets/avatar-6.png';
import placeholderImage from '../assets/image.svg';
import useAuthorStore from '../stores/Authors.store';
import { useEffect } from 'react';

const id = "68b41e3e0589391ea3213974";
// const id = "68b41e3e0589391ea3213976";

const Dashboard = () => {

    const { isAuthorLoaded, author, loadOneAuthor } = useAuthorStore();

    useEffect(() => {
        loadOneAuthor(id);
    }, [])

    return (
        <main className='dashboard'>
            <aside>

                <Link to='/' >
                    <img src={Logo} alt="" />
                </Link>

                <nav className='navigation'>

                </nav>

                <div className="author">
                    {
                        isAuthorLoaded ? <img src={author.avatar} alt="" className='avatar' /> : <img src={placeholderAvatar} alt="" className='avatar' />
                    }

                    <div className="text">
                        <p className='admin body-1'>Admin</p>
                        {
                            isAuthorLoaded ? <p className='body-1 name'>{author.name}</p> : <p className='body-1 name'>John Doe</p>
                        }
                    </div>
                </div>

            </aside>
            <article >

                <h1>Welcome

                    {isAuthorLoaded ? <span> {author.name} </span> : <span> ...</span>}

                </h1>

                <h3 className="">Your Blog Posts</h3>

                {
                    isAuthorLoaded ?

                        <table>

                            <tr>
                                <th className='body-1'>image</th>
                                <th className='body-1'>title</th>
                            </tr>

                            {
                                author.posts.map((post, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img src={post.thumbnail} alt="" className='post-image' />
                                        </td>
                                        <td className='body-1'>{post.title}</td>
                                    </tr>
                                ))
                            }

                        </table> :

                        <table>

                            <tr>
                                <th className='body-1'>image</th>
                                <th className='body-1'>title</th>
                            </tr>


                            <tr>
                                <td>
                                    <img src={placeholderImage} alt="" className='post-image' />
                                </td>
                                <td>...</td>
                            </tr>

                        </table>
                }
            </article>
        </main>
    )
}

export default Dashboard
