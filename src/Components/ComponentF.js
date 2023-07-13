import React from "react";
import { userContext, schoolContext } from "../App";

function ComponentF() {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return (
            <schoolContext.Consumer>
              {(school) => {
                return (
                  <>
                    <h1>User: {user}</h1>
                    <br />
                    <h1>School: {school}</h1>
                  </>
                );
              }}
            </schoolContext.Consumer>
          );
        }}
      </userContext.Consumer>
    </div>
  );
}

export default ComponentF;
