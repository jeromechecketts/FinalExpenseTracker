const CompanyInfo = ({ company }) => {
    if (company) {
      const { image, name, url } = company;

      const handlePress = () => {
        window.open(url, '_blank');
      }

      return (
        <div className="col-8 my-4 d-flex flex-column align-items-center" onClick={handlePress}>
          <img src={image} style={{ width: "100%", height: "150px", objectFit: 'contain', cursor: 'pointer' }} alt={name} />
        </div>
      );
    }
  };

export default CompanyInfo;