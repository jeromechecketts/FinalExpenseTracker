import grandparents from '../app/assets/img/grandparents.jpg'
import HomeList from '../components/HomeList';

const HomeDisplay = () => {
    return (
        <>
            <img src={grandparents} className='mb-3 w-75 col-12' alt='pic of grandparents with grandchildren' />
            <HomeList />
        </>
    )
};

export default HomeDisplay;