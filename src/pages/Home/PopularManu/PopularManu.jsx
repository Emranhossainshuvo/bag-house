import { useEffect, useState } from "react";
import SectionTitles from "../../../components/SectionTitles/SectionTitles";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";


const PopularManu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    
    return (
        <section className="mb-12">
            <SectionTitles
                heading="From Our Manu"
                subHeading="Popular Items"
            >

            </SectionTitles>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    >

                    </MenuItems>)
                }
            </div>

        </section>
    );
};

export default PopularManu;