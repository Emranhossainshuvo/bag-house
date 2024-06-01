import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="pt-8">
            {title &&
                <Cover img={coverImg} title={title}></Cover>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 my-16 gap-10">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    >

                    </MenuItems>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-black text-white border-0 border-b-4">Order now!</button>
            </Link>
        </div>
    );
};

export default MenuCategory;