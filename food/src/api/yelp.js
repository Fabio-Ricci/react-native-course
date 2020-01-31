import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer k9VIDVjCGIMyD4C2cB3GvCiEpW4pKbdtrFhnLm_xv5knmxG2pMD5tmHxMVAkgTcscQmJ-WBAZYC4zIFsZVHS-nRWFNl-V_SubXCYPbc2dFi10oku8S8XNgbr5aQxXnYx'
    }
});