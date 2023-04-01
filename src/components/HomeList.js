import { homeListArray } from "../app/shared/homeListArray";

const HomeList = () => {
    return (
        <>
            <h2 className="my-5">How We Can Help You!</h2>
            <ul className="mb-5 mx-auto">
                {homeListArray.map((current, idx) => {
                    return(
                        <li className='offset-4 text-start' key={idx}>{current}</li>
                    )
                })}
            </ul>
        </>
    );
};

export default HomeList;