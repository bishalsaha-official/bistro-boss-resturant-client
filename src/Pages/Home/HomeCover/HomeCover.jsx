import banner from '../../../assets/home/chef-service.jpg'

const HomeCover = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className="max-w-10/12 mx-auto my-20 px-10 py-20 bg-cover bg-center bg-no-repeat rounded-2xl">
            <div className="max-w-10/12 mx-auto p-10 bg-white text-black text-center rounded-2xl">
                <h2 className='text-3xl uppercase mb-5 text-[#151515]'>Bistro Boss</h2>
                <p className='px-10 text-[#151515]'>Experience seamless restaurant operations with Bistro Boss, your ultimate solution for managing orders, menus, staff, and customers—all in one place. Designed to streamline daily tasks, enhance customer service, and boost productivity, Bistro Boss empowers restaurant owners to take full control of their business with style and ease.</p>
            </div>
        </div>
    );
};

export default HomeCover;