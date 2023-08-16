import axios from "axios";
//const cors = require('cors');
export default axios.create({
  baseURL: "http://localhost:8080/",
  credentials:false,            
  /*accessControlAllowOrigin: *,
  access-control-allow-credentials:true,*/
  optionSuccessStatus:200,
  headers: {
    "Content-type": "application/json"
  }
});
//app.use(cors(corsOptions));