import { FE_COMPANIES } from "../../app/shared/FE_COMPANIES";
import { Row } from "reactstrap";
import CompanyInfo from "./CompanyInfo";

const CompaniesDisplay = () => {
    return (
      <>
        <Row className="my-5">
          <h1>Companies We Work With:</h1>
          <div className="container">
            <div className="row">
              {FE_COMPANIES.map((company) => {
                return (
                  <div className="col-3">
                    <CompanyInfo company={company} />
                  </div>
                );
              })}
            </div>
          </div>
        </Row>
      </>
    );
  };
  
export default CompaniesDisplay;
