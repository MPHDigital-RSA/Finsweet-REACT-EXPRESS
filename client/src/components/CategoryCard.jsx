import { Link } from 'react-router-dom';
import '../styles/CategoryCard.css';

const CategoryCard = ({ category }) => {
    const handleClick = () => {
        alert(`category ${category.title} clicked!`)
    };

    return (
        <Link className='category-card' to={`/category`}>
            <div className="category-icon">
                <img src={category.icon} alt="" />
            </div>
            <h3>{category.title}</h3>
            <p className='body-1'>{category.description}</p>
        </Link>
    )
}

export default CategoryCard
