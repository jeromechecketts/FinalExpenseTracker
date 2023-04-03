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
    const [apptProgress, setApptProgress] = useState(0);
    const [presentationProgress, setPresentationProgress] = useState(0);
    const [doorKnockProgress, setDoorKnockProgress] = useState(0);
    const [hourProgress, setHourProgress] = useState(0);

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
    const handleGoalsShow = () => {
        setShowCustomGoals(false);
    };
    const handleStatsShow = () => {
        setShowDailyStats(false);
    };
    const handleApptProgress = (newApptProgress) => {
        setApptProgress(apptProgress + parseInt(newApptProgress));
    };
    const handlePresentationProgress = (newPresentationProgress) => {
        setPresentationProgress(presentationProgress + parseInt(newPresentationProgress));
    };
    const handleDoorKnockProgress = (newDoorKnockProgress) => {
        setDoorKnockProgress(doorKnockProgress + parseInt(newDoorKnockProgress));
    };
    const handleHourProgress = (newHourProgress) => {
        setHourProgress(hourProgress + parseInt(newHourProgress));
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
                        setAppts(12);
                        setPresentations(12);
                        setDoorKnocks(18);
                        setHours(33);
                        setShowCustomGoals(false);
                    }}
                >
                    Reset to Default Goals
                </Button>
                {showDailyStats && !showCustomGoals && 
                <DailyStatForm 
                    handleStatsShow={handleStatsShow}
                    handleApptProgress={handleApptProgress}
                    handlePresentationProgress={handlePresentationProgress}
                    handleDoorKnockProgress={handleDoorKnockProgress}
                    handleHourProgress={handleHourProgress}
                />}
                {showCustomGoals && !showDailyStats &&
                <CustomGoals 
                    handleApptChange={handleApptChange}
                    handlePresentationChange={handlePresentationChange}
                    handleDoorKnockChange={handleDoorKnockChange}
                    handleHourChange={handleHourChange}
                    handleGoalsShow={handleGoalsShow}
                />}
                <DefaultGoals />
                <div className="mt-4">
                    <TrackerItem 
                        category='Appointments' 
                        goal={appts} 
                        progress={apptProgress} 
                    />
                </div>
                <TrackerItem 
                    category='Presentations' 
                    goal={presentations} 
                    progress={presentationProgress} 
                />
                <TrackerItem 
                    category='Door Knocks' 
                    goal={doorKnocks} 
                    progress={doorKnockProgress} 
                />
                <TrackerItem 
                    category='Hours' 
                    goal={hours} 
                    progress={hourProgress} 
                />
            </Container>
    );
};

export default TrackerPage;