import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../../public/assets/menu/banner3.jpg'
import dessertImg from '../../../../public/assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../../public/assets/menu/pizza-bg.jpg'
import saladImg from '../../../../public/assets/menu/salad-bg.jpg'
import soupImg from '../../../../public/assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitles from "../../../components/SectionTitles/SectionTitles";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'desserts')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    const pizza = menu.filter(item => item.category === 'pizza')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                title="OUR MENU"
                description="Would you like to try a dish?"
                img={menuImg}
            ></Cover>
            {/* main cover */}
            <SectionTitles
                subHeading="Don't miss"
                heading="today's offer"
            ></SectionTitles>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Dessert menu items */}
            <MenuCategory
                items={dessert}
                title="desserts"
                coverImg={dessertImg}
            ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory
                items={pizza}
                title="pizza"
                coverImg={pizzaImg}
            ></MenuCategory>
            {/* salad menu items */}
            <MenuCategory
                items={salad}
                title="salad"
                coverImg={saladImg}
            ></MenuCategory>
            {/* soup menu items */}
            <MenuCategory
                items={soup}
                title="soup"
                coverImg={soupImg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;