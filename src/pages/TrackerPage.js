import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import TrackerItem from "../components/TrackerItem";
import { useState } from "react";
import DailyStatForm from "../components/DailyStatForm";

const TrackerPage = () => {
    const [appts, setAppts] = useState(12);
    const [presentations, setPresentations] = useState(12);
    const [doorKnocks, setDoorKnocks] = useState(18);
    const [hours, setHours] = useState(33);

    const DefaultGoals = () => {
        return (
            <div className="my-4">
                <p>Default Goals: <b>12</b> Appointments / <b>12</b> Presentations / <b>18</b> Door Knocks / <b>33</b> Hours</p>
            </div>
        )
    }

    return (
            <Container>
                <SubHeader current='3/4 Tracker' />
                <DailyStatForm />
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