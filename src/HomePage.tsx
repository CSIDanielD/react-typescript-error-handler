import React from "react";
import { Link } from "react-router-dom";

const breeds = [
  "husky",
  "papillon",
  "maltese",
  "mix",
  "poodle",
  "a non-existant breed"
];

export const HomePage: React.FC = props => {
  return (
    <div>
      <h1>Some very nice doggos.</h1>
      <ul>
        {breeds.map(breed => (
          <li key={breed}>
            <Link to={`/dogs/${breed}/`}>{breed}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
