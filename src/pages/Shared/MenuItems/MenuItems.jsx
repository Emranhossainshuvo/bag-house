

const MenuItems = ({item}) => {

    const {image, price, recipe, name} = item || {}; 

    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[100px] h-[85px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500 font-bold">${price}</p>
        </div>
    );
};

export default MenuItems;