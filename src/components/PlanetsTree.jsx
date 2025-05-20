export default function PlanetsTree({ id, placeById, parentId, onComplete }) {
  const place = placeById[id];
  console.log(place);
  const childIds = place.childIds;
  console.log(childIds);
  return (
    <li>
      <span>{place.title}</span>
      <button
        onClick={() => {
          onComplete(parentId, id);
        }}
      >
        Complete
      </button>

      <ol>
        {childIds.length > 0 &&
          childIds.map((childId) => (
            <PlanetsTree
              id={childId}
              placeById={placeById}
              parentId={id}
              key={childId}
              onComplete={onComplete}
            />
          ))}
      </ol>
    </li>
  );
}
