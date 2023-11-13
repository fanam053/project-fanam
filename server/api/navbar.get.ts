/* =========================================================================================
    File Name: navbar.ts
    Description: navbar  Component in api fake 
    Component Name: navbar component
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

==========================================================================================
*/
import axios from "axios";
export default defineEventHandler(async (event) => {
  const response = await axios.get("http://localhost:4000/navbar");
  const data = response.data;
  return {
    data,
  };
});
