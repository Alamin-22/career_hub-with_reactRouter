import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../Features/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Helmet><title>Career Hub || Home</title></Helmet>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
            
        </div>
    );
};

export default Home;