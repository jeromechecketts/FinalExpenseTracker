import { FE_COMPANIES } from "../../app/shared/FE_COMPANIES";
import { Row } from "reactstrap";
import CompanyInfo from "./CompanyInfo";

const CompaniesDisplay = () => {
    return (
        <>
            <Row className="my-5">
                <h1>Companies We Work With:</h1>
                {FE_COMPANIES.map((company) => {
                    return (
                        <CompanyInfo company={company}/>
                    )
                })}
            </Row>
        </>
    );
};

export default CompaniesDisplay;