
const CategoryListCard = () => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="./src/assets/icons/accounts.png" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-left">
                    <h2 className="card-title">Account & Finance</h2>
                    <p>300 Jobs Available</p>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="./src/assets/icons/creative.png" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-left">
                    <h2 className="card-title">Creative Design</h2>
                    <p>100+ Jobs Available</p>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="./src/assets/icons/marketing.png" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-left">
                    <h2 className="card-title">Marketing & Sales</h2>
                    <p>150+ Jobs Available</p>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="./src/assets/icons/chip.png" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-left">
                    <h2 className="card-title">Engineering Job</h2>
                    <p>300 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryListCard;