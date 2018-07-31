import axios from 'axios';

const WebApi = {

    getVenueByGeoCode(geocode){
       return axios.get(`https://api.foursquare.com/v2/venues/explore?near=${geocode}&client_id=AEIMZOOZZDEDPOCBD00BSM0ZZGEQSKZV2TA4SBJ0EIJUSTZQ&v=20180731&client_secret=4CZR2HN0WUR02L14W2XJSKLWMCT2FWDTOW13FKUE01NBOV2U`);
    }
};

export default WebApi;
