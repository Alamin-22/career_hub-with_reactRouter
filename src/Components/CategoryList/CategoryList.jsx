import CategoryListCard from "./CategoryListCard/CategoryListCard";

const CategoryList = () => {
    return (
        <div>
            <h2 className="text-5xl text-center font-semibold mt-28">Job Category List</h2>
            <p className="text-xl p-3 text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <CategoryListCard></CategoryListCard>
        </div>
    );
};

export default CategoryList;