import '../styles/CategoryCard.css';

const CategoryCard = ({ category }) => {
    const handleClick = () => {
        alert(`category ${category.title} clicked!`)
    };

    return (
        <div className='category-card' onClick={handleClick}>
            <div className="category-icon">
                <img src={category.icon} alt="" />
            </div>
            <h3>{category.title}</h3>
            <p className='body-1'>{category.description}</p>
        </div>
    )
}

export default CategoryCard
