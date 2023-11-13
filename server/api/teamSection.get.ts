/* =========================================================================================
    File Name: teamsection.ts
    Description: teamsection  Component in api fake 
    Component Name: teamsection component
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

==========================================================================================
*/
import axios from "axios";
export default defineEventHandler(async (event) => {
  const response = await axios.get("http://localhost:4000/ExperiencedTeam");
  const data = response.data;
  return {
    data,
  };
});
