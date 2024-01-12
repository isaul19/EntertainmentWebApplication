import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(config);

export const App = () => {
  return (
    <>
      <Authenticator.Provider>
        <RouterProvider router={router} />
      </Authenticator.Provider>
    </>
  );
};
