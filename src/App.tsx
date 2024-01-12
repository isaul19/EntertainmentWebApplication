import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

Amplify.configure(config);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
