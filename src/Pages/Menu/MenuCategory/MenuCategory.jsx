import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, bgImg, description }) => {
    return (
        <>
            {
                title && <Cover title={title} bgImg={bgImg} description={description}></Cover>
            }
            <div className='max-w-10/12 mx-auto my-10'>
                <div className="grid md:grid-cols-2 gap-5">
                    {
                        items.map(items => <MenuItem items={items} key={items._id}></MenuItem>)
                    }
                </div>
            </div>
        </>
    );
};

export default MenuCategory;