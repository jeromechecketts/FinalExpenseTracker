import { Button, Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import TrackerItem from "../components/TrackerItem";
import { useState } from "react";
import DailyStatForm from "../components/DailyStatForm";
import CustomGoals from "../components/CustomGoals";

const TrackerPage = () => {
    const [appts, setAppts] = useState(12);
    const [presentations, setPresentations] = useState(12);
    const [doorKnocks, setDoorKnocks] = useState(18);
    const [hours, setHours] = useState(33);
    const [showDailyStats, setShowDailyStats] = useState(false);
    const [showCustomGoals, setShowCustomGoals] = useState(false);

    const DefaultGoals = () => {
        return (
            <div className="my-4">
                <p>Goals: <b>{appts}</b> Appointments <b>{presentations}</b> Presentations <b>{doorKnocks}</b> Door Knocks <b>{hours}</b> Hours</p>
            </div>
        )
    }

    const handleApptChange = (newAppt) => {
        setAppts(newAppt);
    };
    const handlePresentationChange = (newPresentation) => {
        setPresentations(newPresentation);
    };
    const handleDoorKnockChange = (newDoorKnock) => {
        setDoorKnocks(newDoorKnock);
    };
    const handleHourChange = (newHour) => {
        setHours(newHour);
    };
    const handleGoalsCancel = () => {
        setShowCustomGoals(false);
    };
    const handleStatsCancel = () => {
        setShowDailyStats(false);
    };

    return (
            <Container>
                <SubHeader current='3/4 Tracker' />
                <Button 
                    onClick={() => {
                        setShowDailyStats(true);
                        setShowCustomGoals(false);
                    }}
                    className="mb-3 mx-2"
                    color='warning'
                >
                    Add Daily Stats
                </Button>
                <Button 
                    className="mb-3 mx-2" 
                    onClick={() => {
                        setShowCustomGoals(true);
                        setShowDailyStats(false);
                    }}
                    color='info'
                >
                    Add Custom Goals
                </Button>
                <Button 
                    className="mb-3 mx-2"
                    color='danger'
                    onClick={() => {
                        {setAppts(12)};
                        {setPresentations(12)};
                        {setDoorKnocks(18)};
                        {setHours(33)};
                    }}
                >
                    Reset to Default Goals
                </Button>
                {showDailyStats && !showCustomGoals && <DailyStatForm handleStatsCancel={handleStatsCancel}/>}
                {showCustomGoals && !showDailyStats &&
                <CustomGoals 
                    handleApptChange={handleApptChange}
                    handlePresentationChange={handlePresentationChange}
                    handleDoorKnockChange={handleDoorKnockChange}
                    handleHourChange={handleHourChange}
                    handleGoalsCancel={handleGoalsCancel}
                />}
                <DefaultGoals />
                <div className="mt-4">
                    <TrackerItem category='Appointments' goal={appts} progress={5} />
                </div>
                <TrackerItem category='Presentations' goal={presentations} progress={2} />
                <TrackerItem category='Door Knocks' goal={doorKnocks} progress={9} />
                <TrackerItem category='Hours' goal={hours} progress={10} />
            </Container>
    );
};

export default TrackerPage;