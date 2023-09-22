
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img  src="https://i.ibb.co/JFsRF5G/user.png" className="max-w-sm rounded-lg shadow-2xl"  draggable={ false}/>
                <div>
                    <h1 className="text-5xl font-bold ">One Step <br /> Closer To Your <br />
                    <span className="">Dream Job</span></h1>
                    <p className="py-6 ">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;