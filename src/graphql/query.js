import { gql } from "apollo-boost";

export const PLAN_DESTINATION = gql`
  query plan(
    $fromlong: Float!
    $fromlat: Float!
    $tolong: Float!
    $tolat: Float!
  ) {
    plan(
      from: { lat: $fromlat, lon: $fromlong }
      to: { lat: $tolat, lon: $tolong }
      numItineraries: 1
    ) {
      itineraries {
        legs {
          mode
          startTime
          endTime
          route {
            shortName
          }
          from {
            lat
            lon
            name
            stop {
              code
              name
            }
          }
          to {
            lat
            lon
            name
          }
        }
      }
    }
  }
`;
