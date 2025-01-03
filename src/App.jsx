import { useState } from 'react';
import { initialTravelPlan } from './Greeting.jsx';

function PlaceTree({ id, placesById }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      {childIds.length > 0 && (
        <ol>
          {childIds.map(childId => (
            <PlaceTree 
            key={childId} 
            id={childId}
            placesById={placesById}
            
            />
          ))}
        </ol>
      )}
    </li>
  );
}

function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree 
          key={id}
          id={id}
          place={plan}
           />
        ))}
      </ol>
    </>
  )
}

export default TravelPlan;