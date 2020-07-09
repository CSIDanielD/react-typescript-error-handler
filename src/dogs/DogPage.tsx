import React from "react";
import { useParams, Link } from "react-router-dom";
import useQuery from "../common/useQuery";

import { DogAPIResponse } from "./types";

interface DogPageRouteParams {
  breed: string;
}

export const DogPage: React.FC = props => {
  const { breed } = useParams<DogPageRouteParams>();
  const { data } = useQuery<DogAPIResponse>({
    url: `https://dog.ceo/api/breed/${breed}/images/random`
  });

  const imageSrc = data?.message;
  
  return (
    <div>
      <div>
        <Link to="/">Back</Link>
      </div>
      {!imageSrc && <p>Loading...</p>}
      {imageSrc && <img alt={`A real nice ${breed}`} src={imageSrc} height={200} />}
    </div>
  ); 
};

export default DogPage;
