import { useState } from "react";
import { initialTravelPlan } from "../flattenData";
import PlanetsTree from "./PlanetsTree";

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;
  const handleComplete = (parentId, childId) => {
    console.log(parentId, childId);
    const parent = plan[parentId];
    const newParent = {
      ...parent,
      childIds: parent.childIds.filter((plan) => plan != childId),
    };
    setPlan({
      ...plan,
      [parentId]: newParent,
    });
  };
  return (
    <div>
      <h1>Place To Visit</h1>
      <ol>
        {planetIds.map((planetId) => (
          <PlanetsTree
            id={planetId}
            key={planetId}
            placeById={plan}
            parentId={0}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </div>
  );
}
