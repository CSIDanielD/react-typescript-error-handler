import React from "react";
import ErrorPage from "./ErrorPage";

export const ErrorHandler: React.FC = props => {
  const returnCode = 200;
  if (returnCode >= 400)
    return (
      <ErrorPage error="Something bad happened." responseCode={returnCode} />
    );

  return props.children;
};

export default ErrorHandler;
