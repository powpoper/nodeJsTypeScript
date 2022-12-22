import { DigestResponse } from "./services/DigestResponse.js";
import { FetchData } from "./services/FetchData.js";
import { Save } from "./services/Save.js";

(()=> {
    let response = FetchData();
    let csv = DigestResponse(response);
    Save(csv);
})();