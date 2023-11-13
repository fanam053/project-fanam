/* =========================================================================================
    File Name: services.ts
    Description: services  Component in api fake 
    Component Name: services component
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

==========================================================================================
*/
import axios from "axios";
export default defineEventHandler(async (event) => {
  const response = await axios.get("http://localhost:4000/services");
  const data = response.data;
  return {
    data,
  };
});
