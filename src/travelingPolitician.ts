/**
 * Traveling Politician Problem Solver
 * 
 * Problem: A politician has to start his campaign in the capital of Iowa (Des Moines).
 * He has to visit every state capital including Hawaii and Alaska and end up in 
 * Washington DC at the White House. Each state capital should be visited exactly once.
 * The goal is to determine the best route and the total distance of this route.
 */

// Represents a location with coordinates
interface GeoLocation {
  name: string;
  state: string;
  latitude: number;
  longitude: number;
  isCapital: boolean;
}

// Represents a route between locations
interface Route {
  path: GeoLocation[];
  distance: number;
}

// State capitals data (latitude and longitude in decimal degrees)
const stateCapitals: GeoLocation[] = [
  { name: "Montgomery", state: "Alabama", latitude: 32.3792, longitude: -86.3077, isCapital: true },
  { name: "Juneau", state: "Alaska", latitude: 58.3019, longitude: -134.4197, isCapital: true },
  { name: "Phoenix", state: "Arizona", latitude: 33.4484, longitude: -112.0740, isCapital: true },
  { name: "Little Rock", state: "Arkansas", latitude: 34.7465, longitude: -92.2896, isCapital: true },
  { name: "Sacramento", state: "California", latitude: 38.5816, longitude: -121.4944, isCapital: true },
  { name: "Denver", state: "Colorado", latitude: 39.7392, longitude: -104.9903, isCapital: true },
  { name: "Hartford", state: "Connecticut", latitude: 41.7658, longitude: -72.6734, isCapital: true },
  { name: "Dover", state: "Delaware", latitude: 39.1582, longitude: -75.5244, isCapital: true },
  { name: "Tallahassee", state: "Florida", latitude: 30.4383, longitude: -84.2807, isCapital: true },
  { name: "Atlanta", state: "Georgia", latitude: 33.7490, longitude: -84.3880, isCapital: true },
  { name: "Honolulu", state: "Hawaii", latitude: 21.3069, longitude: -157.8583, isCapital: true },
  { name: "Boise", state: "Idaho", latitude: 43.6150, longitude: -116.2023, isCapital: true },
  { name: "Springfield", state: "Illinois", latitude: 39.7817, longitude: -89.6501, isCapital: true },
  { name: "Indianapolis", state: "Indiana", latitude: 39.7684, longitude: -86.1581, isCapital: true },
  { name: "Des Moines", state: "Iowa", latitude: 41.5868, longitude: -93.6250, isCapital: true },
  { name: "Topeka", state: "Kansas", latitude: 39.0558, longitude: -95.6890, isCapital: true },
  { name: "Frankfort", state: "Kentucky", latitude: 38.2009, longitude: -84.8733, isCapital: true },
  { name: "Baton Rouge", state: "Louisiana", latitude: 30.4515, longitude: -91.1871, isCapital: true },
  { name: "Augusta", state: "Maine", latitude: 44.3106, longitude: -69.7795, isCapital: true },
  { name: "Annapolis", state: "Maryland", latitude: 38.9784, longitude: -76.4922, isCapital: true },
  { name: "Boston", state: "Massachusetts", latitude: 42.3601, longitude: -71.0589, isCapital: true },
  { name: "Lansing", state: "Michigan", latitude: 42.7325, longitude: -84.5555, isCapital: true },
  { name: "Saint Paul", state: "Minnesota", latitude: 44.9537, longitude: -93.0900, isCapital: true },
  { name: "Jackson", state: "Mississippi", latitude: 32.2988, longitude: -90.1848, isCapital: true },
  { name: "Jefferson City", state: "Missouri", latitude: 38.5767, longitude: -92.1735, isCapital: true },
  { name: "Helena", state: "Montana", latitude: 46.5891, longitude: -112.0391, isCapital: true },
  { name: "Lincoln", state: "Nebraska", latitude: 40.8136, longitude: -96.7026, isCapital: true },
  { name: "Carson City", state: "Nevada", latitude: 39.1638, longitude: -119.7674, isCapital: true },
  { name: "Concord", state: "New Hampshire", latitude: 43.2081, longitude: -71.5376, isCapital: true },
  { name: "Trenton", state: "New Jersey", latitude: 40.2206, longitude: -74.7597, isCapital: true },
  { name: "Santa Fe", state: "New Mexico", latitude: 35.6870, longitude: -105.9378, isCapital: true },
  { name: "Albany", state: "New York", latitude: 42.6526, longitude: -73.7562, isCapital: true },
  { name: "Raleigh", state: "North Carolina", latitude: 35.7796, longitude: -78.6382, isCapital: true },
  { name: "Bismarck", state: "North Dakota", latitude: 46.8083, longitude: -100.7837, isCapital: true },
  { name: "Columbus", state: "Ohio", latitude: 39.9612, longitude: -82.9988, isCapital: true },
  { name: "Oklahoma City", state: "Oklahoma", latitude: 35.4676, longitude: -97.5164, isCapital: true },
  { name: "Salem", state: "Oregon", latitude: 44.9429, longitude: -123.0351, isCapital: true },
  { name: "Harrisburg", state: "Pennsylvania", latitude: 40.2732, longitude: -76.8867, isCapital: true },
  { name: "Providence", state: "Rhode Island", latitude: 41.8240, longitude: -71.4128, isCapital: true },
  { name: "Columbia", state: "South Carolina", latitude: 34.0007, longitude: -81.0348, isCapital: true },
  { name: "Pierre", state: "South Dakota", latitude: 44.3683, longitude: -100.3510, isCapital: true },
  { name: "Nashville", state: "Tennessee", latitude: 36.1627, longitude: -86.7816, isCapital: true },
  { name: "Austin", state: "Texas", latitude: 30.2672, longitude: -97.7431, isCapital: true },
  { name: "Salt Lake City", state: "Utah", latitude: 40.7608, longitude: -111.8910, isCapital: true },
  { name: "Montpelier", state: "Vermont", latitude: 44.2601, longitude: -72.5754, isCapital: true },
  { name: "Richmond", state: "Virginia", latitude: 37.5407, longitude: -77.4360, isCapital: true },
  { name: "Olympia", state: "Washington", latitude: 47.0379, longitude: -122.9007, isCapital: true },
  { name: "Charleston", state: "West Virginia", latitude: 38.3498, longitude: -81.6326, isCapital: true },
  { name: "Madison", state: "Wisconsin", latitude: 43.0731, longitude: -89.4012, isCapital: true },
  { name: "Cheyenne", state: "Wyoming", latitude: 41.1400, longitude: -104.8202, isCapital: true },
  { name: "Washington", state: "District of Columbia", latitude: 38.9072, longitude: -77.0369, isCapital: false } // White House
];

/**
 * Calculates the distance between two locations using the Haversine formula
 * @param loc1 First location
 * @param loc2 Second location
 * @returns Distance in miles
 */
function calculateDistance(loc1: GeoLocation, loc2: GeoLocation): number {
  const R = 3958.8; // Earth's radius in miles
  const dLat = toRadians(loc2.latitude - loc1.latitude);
  const dLon = toRadians(loc2.longitude - loc1.longitude);
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(loc1.latitude)) * Math.cos(toRadians(loc2.latitude)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return distance;
}

/**
 * Converts degrees to radians
 * @param degrees Angle in degrees
 * @returns Angle in radians
 */
function toRadians(degrees: number): number {
  return degrees * Math.PI / 180;
}

/**
 * Finds the nearest neighbor from the current location
 * @param current Current location
 * @param unvisited Array of unvisited locations
 * @returns The nearest unvisited location
 */
function findNearestNeighbor(current: GeoLocation, unvisited: GeoLocation[]): GeoLocation {
  let nearest: GeoLocation = unvisited[0];
  let minDistance = calculateDistance(current, nearest);
  
  for (let i = 1; i < unvisited.length; i++) {
    const distance = calculateDistance(current, unvisited[i]);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = unvisited[i];
    }
  }
  
  return nearest;
}

/**
 * Solves the Traveling Politician Problem using the Nearest Neighbor algorithm
 * @param startLocation Starting location (Iowa's capital)
 * @param endLocation Ending location (White House)
 * @param locations All locations to visit
 * @returns The best route found and its total distance
 */
function solveTravelingPolitician(
  startLocation: GeoLocation,
  endLocation: GeoLocation,
  locations: GeoLocation[]
): Route {
  // Create a copy of locations excluding start and end
  const locationsToVisit = locations.filter(
    loc => loc.name !== startLocation.name && loc.name !== endLocation.name
  );
  
  // Initialize the route with the start location
  const route: GeoLocation[] = [startLocation];
  let totalDistance = 0;
  let currentLocation = startLocation;
  
  // Visit all locations using nearest neighbor algorithm
  while (locationsToVisit.length > 0) {
    const nextLocation = findNearestNeighbor(currentLocation, locationsToVisit);
    route.push(nextLocation);
    
    // Add distance to total
    totalDistance += calculateDistance(currentLocation, nextLocation);
    
    // Update current location and remove the visited location
    currentLocation = nextLocation;
    const index = locationsToVisit.findIndex(loc => loc.name === nextLocation.name);
    locationsToVisit.splice(index, 1);
  }
  
  // Add the end location (White House)
  route.push(endLocation);
  totalDistance += calculateDistance(currentLocation, endLocation);
  
  return {
    path: route,
    distance: totalDistance
  };
}

/**
 * Formats a number with commas as thousands separators
 * @param num The number to format
 * @returns Formatted number string
 */
function formatNumber(num: number): string {
  return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Main function to demonstrate the Traveling Politician Problem solution
 */
function main(): void {
  console.log("Traveling Politician Problem Solution\n");
  console.log("Problem: A politician has to start his campaign in the capital of Iowa (Des Moines),");
  console.log("visit every state capital including Hawaii and Alaska, and end up in Washington DC");
  console.log("at the White House. Each state capital should be visited exactly once.\n");
  
  // Find Iowa's capital (starting point)
  const startLocation = stateCapitals.find(loc => loc.state === "Iowa")!;
  
  // Find White House (ending point)
  const endLocation = stateCapitals.find(loc => loc.state === "District of Columbia")!;
  
  // Solve the problem
  const solution = solveTravelingPolitician(startLocation, endLocation, stateCapitals);
  
  console.log(`Starting point: ${startLocation.name}, ${startLocation.state}`);
  console.log(`Ending point: ${endLocation.name}, ${endLocation.state} (White House)\n`);
  
  console.log("Best route found:");
  solution.path.forEach((location, index) => {
    console.log(`${index + 1}. ${location.name}, ${location.state}`);
  });
  
  console.log(`\nTotal distance: ${formatNumber(solution.distance)} miles`);
  console.log(`Number of locations visited: ${solution.path.length}`);
  
  // Note about the algorithm
  console.log("\nNote: This solution uses the Nearest Neighbor algorithm, which is a greedy");
  console.log("approach that doesn't guarantee the optimal solution to the Traveling Salesman");
  console.log("Problem. However, it provides a good approximation in reasonable time.");
}

main(); 