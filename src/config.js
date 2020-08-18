
import dotenv from 'dotenv';

dotenv.config();

const config = {
  api_host: process.env.REACT_APP_API_HOST,  
  site_title: process.env.REACT_APP_SITE_TITLE, 
  global_ongkir: process.env.REACT_APP_GLOBAL_ONGKIR,
  owner: process.env.REACT_APP_OWNER, 
  contact: process.env.REACT_APP_CONTACT, 
  billing: {
      account_no: process.env.REACT_APP_BILLING_NO,
      bank_name: process.env.REACT_APP_BILLING_BANK
    }
}

export { config };

