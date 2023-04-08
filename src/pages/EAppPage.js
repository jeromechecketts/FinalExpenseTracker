const EAppPage = () => {

    const handleChange = (e) => {
        window.location.href = e.target.value;
    };

    return (
        <>
            <div style={{ display: 'flex' }}>
                <iframe 
                    style={{ border: 'none', height: '800px', width: '100%', marginTop: '40px', display: 'inline block' }}
                    src="https://insurancetoolkits.com/fex/lite-form/?token=fGoEfDrq8UiUWz0wQkv3Ji16cbq5exyC-eNDfHCZ"
                    title="E-App"
                >
                </iframe>
            </div>
            <div style={{ display: 'flex' }}>
                <h3>Select a Company to go to their E-APP</h3>
                <select onChange={handleChange}>
                    <option value=''>Select a Company</option>
                    <option value='https://web.apptical.com/LiveApp/Login/'>Prosperity</option>
                    <option value='https://eapp.cfglife.com/InsuranceElements/'>Columbian Fiancial Group</option>
                </select>
            </div>
        </>
    );
};

export default EAppPage;