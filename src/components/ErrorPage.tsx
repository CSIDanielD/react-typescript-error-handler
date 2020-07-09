import React from "react";
import { Link } from "react-router-dom";

export interface ErrorPageProps {
  responseCode: number;
  error?: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = props => {
  return (
    <div>
      <h1>Response code: {props.responseCode}</h1>
      <p>Got message: {props.error}</p>
    </div>
  );
};

export default ErrorPage;
