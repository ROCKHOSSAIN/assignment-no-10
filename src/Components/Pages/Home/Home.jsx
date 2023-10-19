import AvailableBrands from './AvailableBrands';
import Banner from './Banner';
import LatestCars from './LatestCars';
import PackagesCars from './PackagesCars';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestCars></LatestCars>
            <div className='container mx-auto'>

            <AvailableBrands></AvailableBrands>
            <PackagesCars></PackagesCars>
            </div>
        </div>
    );
};

export default Home;