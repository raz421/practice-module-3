export default function PlanetsTree({ planet }) {
  const childPlaces = planet.childPlaces;
  return (
    <li>
      <p>{planet.title}</p>
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map((place) => (
            <PlanetsTree planet={place} />
          ))}
        </ol>
      )}
    </li>
  );
}
