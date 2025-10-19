import { create } from 'zustand';

import businessIcon from "../assets/business-icon.svg"
import startupIcon from "../assets/startup-icon.svg"
import economyIcon from "../assets/economy-icon.svg"
import technologyIcon from "../assets/technology-icon.svg"

const useCategoryStore = create(() => ({

    categories: [
        {
            icon: businessIcon,
            title: "Business",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        },
        {
            icon: startupIcon,
            title: "Startup",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        },
        {
            icon: economyIcon,
            title: "Economy",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        },
        {
            icon: technologyIcon,
            title: "Technology",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        },
    ],

    handleCategoryIcon: (post) => {
        if (post.category === 'Business') {
            return <img src={businessIcon} />
        } else if (post.category === 'Startup') {
            return <img src={startupIcon} />
        } else if (post.category === 'Technology') {
            return <img src={technologyIcon} />
        } else {
            return <img src={economyIcon} />
        }
    },
}));

export default useCategoryStore;