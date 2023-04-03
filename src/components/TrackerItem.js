import { Progress } from "reactstrap";

const TrackerItem = ({ category, goal, progress }) => {
    return (
        <div className="tracker-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
            <h3 style={{ width: '30%', display: 'inline-block', marginRight: '20px' }}>{category}</h3>
            <Progress value={progress} max={goal} style={{ height: '40px', flexGrow: 1 }}>{`${progress}/${goal}`}</Progress>
            <p style={{ display: 'inline-block', marginLeft: '10px'}}>{ (goal/progress) * 10 }%</p>
        </div>
    )
};

export default TrackerItem;