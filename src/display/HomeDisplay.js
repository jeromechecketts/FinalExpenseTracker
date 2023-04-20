import grandparents from '../app/assets/img/grandparents.jpg'
import HomeList from '../components/HomeList';

const HomeDisplay = () => {
    return (
        <>
            <img src={grandparents} className='home-image' alt='pic of grandparents with grandchildren' />
            <HomeList />
        </>
    )
};

export default HomeDisplay;