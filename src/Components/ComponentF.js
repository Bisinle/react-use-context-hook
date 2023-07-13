//THE COMMENTED OUT CODE BELOW IS WHERE WE CAME FROM 
import React from "react";
import { useContext } from "react";
import { userContext, schoolContext } from "../App";

function ComponentF() {
  //call the userContext and pass the contexts you created as an argument and assign to a variable
  const user = useContext(userContext);
  const school = useContext(schoolContext);
  return (
    <div>
      user:{user} - school: {school}
    </div>
  );
}

export default ComponentF;


// import React from "react";
// import { userContext, schoolContext } from "../App";

// function ComponentF() {
//   return (
//     <div>
//       <userContext.Consumer>
//         {(user) => {
//           return (
//             <schoolContext.Consumer>
//               {(school) => {
//                 return (
//                   <>
//                     <h1>User: {user}</h1>
//                     <br />
//                     <h1>School: {school}</h1>
//                   </>
//                 );
//               }}
//             </schoolContext.Consumer>
//           );
//         }}
//       </userContext.Consumer>
//     </div>
//   );
// }

// export default ComponentF;
