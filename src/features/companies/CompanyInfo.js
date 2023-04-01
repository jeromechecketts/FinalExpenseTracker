const CompanyInfo = ({ company }) => {
    if (company) {
        const {image, name} = company;
        return (
            <div className="col-3 my-4">
                <img src={image} style={{width: '75%'}} alt={name} />
                <h4>{name}</h4>
            </div>
        );
    };
};

export default CompanyInfo;
