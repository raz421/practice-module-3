import { useState } from "react";
import { initialTravelPlan } from "../data";
import PlanetsTree from "./PlanetsTree";

export default function Planets() {
  const [plan, setPlanets] = useState(initialTravelPlan);
  const planets = plan.childPlaces;
  return (
    <div>
      <h1>Places to visit</h1>
      <ol>
        {planets.map((planet) => (
          <PlanetsTree planet={planet} />
        ))}
      </ol>
    </div>
  );
}
