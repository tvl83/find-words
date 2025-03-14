/**
 * Water Bucket Problem Solver
 * 
 * Problem: Two kids need to fetch exactly 4 gallons of water from a stream,
 * using only an unmarked 3-gallon bucket and an unmarked 5-gallon bucket.
 * The solution should take less than 15 steps.
 */

// Represents the state of the buckets (3-gallon, 5-gallon)
type BucketState = [number, number];

// Represents a step in the solution
interface Step {
  action: string;
  state: BucketState;
}

// Represents a node in the search tree
interface SearchNode {
  state: BucketState;
  parent: SearchNode | null;
  action: string;
  depth: number;
}

/**
 * Solves the water bucket problem using breadth-first search
 * @param bucket1Capacity Capacity of the first bucket
 * @param bucket2Capacity Capacity of the second bucket
 * @param targetAmount Target amount of water to measure
 * @returns Array of steps to solve the problem, or null if no solution exists
 */
function solveBucketProblem(
  bucket1Capacity: number,
  bucket2Capacity: number,
  targetAmount: number
): Step[] | null {
  // Initialize the visited states set and queue for BFS
  const visited = new Set<string>();
  const queue: SearchNode[] = [];
  
  // Start with empty buckets
  const initialState: BucketState = [0, 0];
  const initialNode: SearchNode = {
    state: initialState,
    parent: null,
    action: "Start with empty buckets",
    depth: 0
  };
  
  queue.push(initialNode);
  visited.add(stateToString(initialState));
  
  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    const [amount1, amount2] = currentNode.state;
    
    // Check if we've reached the target
    if (amount1 === targetAmount || amount2 === targetAmount) {
      // Reconstruct the path
      return reconstructPath(currentNode);
    }
    
    // Generate all possible next states
    const nextStates = generateNextStates(
      currentNode.state,
      bucket1Capacity,
      bucket2Capacity
    );
    
    for (const [nextState, action] of nextStates) {
      const stateStr = stateToString(nextState);
      
      // Skip if we've already visited this state
      if (visited.has(stateStr)) {
        continue;
      }
      
      // Create a new node and add it to the queue
      const newNode: SearchNode = {
        state: nextState,
        parent: currentNode,
        action,
        depth: currentNode.depth + 1
      };
      
      queue.push(newNode);
      visited.add(stateStr);
    }
  }
  
  // No solution found
  return null;
}

/**
 * Converts a state to a string for use in the visited set
 * @param state The state to convert
 * @returns A string representation of the state
 */
function stateToString(state: BucketState): string {
  return `${state[0]},${state[1]}`;
}

/**
 * Generates all possible next states from the current state
 * @param state The current state
 * @param capacity1 Capacity of the first bucket
 * @param capacity2 Capacity of the second bucket
 * @returns Array of [nextState, action] pairs
 */
function generateNextStates(
  state: BucketState,
  capacity1: number,
  capacity2: number
): [BucketState, string][] {
  const [amount1, amount2] = state;
  const nextStates: [BucketState, string][] = [];
  
  // Fill bucket 1
  if (amount1 < capacity1) {
    nextStates.push([[capacity1, amount2], `Fill the ${capacity1}-gallon bucket`]);
  }
  
  // Fill bucket 2
  if (amount2 < capacity2) {
    nextStates.push([[amount1, capacity2], `Fill the ${capacity2}-gallon bucket`]);
  }
  
  // Empty bucket 1
  if (amount1 > 0) {
    nextStates.push([[0, amount2], `Empty the ${capacity1}-gallon bucket`]);
  }
  
  // Empty bucket 2
  if (amount2 > 0) {
    nextStates.push([[amount1, 0], `Empty the ${capacity2}-gallon bucket`]);
  }
  
  // Pour from bucket 1 to bucket 2
  if (amount1 > 0 && amount2 < capacity2) {
    const amountToPour = Math.min(amount1, capacity2 - amount2);
    nextStates.push(
      [[amount1 - amountToPour, amount2 + amountToPour], 
       `Pour from ${capacity1}-gallon to ${capacity2}-gallon bucket`]
    );
  }
  
  // Pour from bucket 2 to bucket 1
  if (amount2 > 0 && amount1 < capacity1) {
    const amountToPour = Math.min(amount2, capacity1 - amount1);
    nextStates.push(
      [[amount1 + amountToPour, amount2 - amountToPour], 
       `Pour from ${capacity2}-gallon to ${capacity1}-gallon bucket`]
    );
  }
  
  return nextStates;
}

/**
 * Reconstructs the path from the initial state to the goal state
 * @param node The goal node
 * @returns Array of steps representing the solution
 */
function reconstructPath(node: SearchNode): Step[] {
  const path: Step[] = [];
  let current: SearchNode | null = node;
  
  while (current !== null) {
    path.unshift({
      action: current.action,
      state: current.state
    });
    current = current.parent;
  }
  
  // Remove the initial "Start with empty buckets" step
  path.shift();
  
  return path;
}

/**
 * Main function to demonstrate the water bucket problem solution
 */
function main(): void {
  console.log("Water Bucket Problem Solution\n");
  console.log("Problem: Two kids need to fetch exactly 4 gallons of water from a stream,");
  console.log("using only an unmarked 3-gallon bucket and an unmarked 5-gallon bucket.\n");
  
  // Find a solution using our algorithm
  const solution = solveBucketProblem(3, 5, 4);
  
  if (solution) {
    console.log("Solution found using breadth-first search:");
    solution.forEach((step, index) => {
      console.log(`Step ${index + 1}: ${step.action} - State: (${step.state[0]},${step.state[1]})`);
    });
    console.log(`\nTotal steps: ${solution.length}`);
  } else {
    console.log("No solution found.");
  }
  
  // Find a solution starting with the 5-gallon bucket first
  console.log("\nAlternative approach - starting with the 5-gallon bucket:");
  
  // Create a custom solution that starts with filling the 5-gallon bucket
  const customSolution: Step[] = [
    { action: "Fill the 5-gallon bucket", state: [0, 5] },
    { action: "Pour from 5-gallon to 3-gallon bucket", state: [3, 2] },
    { action: "Empty the 3-gallon bucket", state: [0, 2] },
    { action: "Pour from 5-gallon to 3-gallon bucket", state: [2, 0] },
    { action: "Fill the 5-gallon bucket", state: [2, 5] },
    { action: "Pour from 5-gallon to 3-gallon bucket", state: [3, 4] }
  ];
  
  customSolution.forEach((step, index) => {
    console.log(`Step ${index + 1}: ${step.action} - State: (${step.state[0]},${step.state[1]})`);
  });
  
  console.log(`\nTotal steps: ${customSolution.length}`);
  
  // Find a solution with a different approach
  console.log("\nNew solution - different approach:");
  
  // Create a new solution that's different from the previous ones
  const newSolution: Step[] = [
    { action: "Fill the 3-gallon bucket", state: [3, 0] },
    { action: "Pour from 3-gallon to 5-gallon bucket", state: [0, 3] },
    { action: "Fill the 3-gallon bucket", state: [3, 3] },
    { action: "Pour from 3-gallon to 5-gallon bucket until 5-gallon is full", state: [1, 5] },
    { action: "Empty the 5-gallon bucket", state: [1, 0] },
    { action: "Pour from 3-gallon to 5-gallon bucket", state: [0, 1] },
    { action: "Fill the 3-gallon bucket", state: [3, 1] },
    { action: "Pour from 3-gallon to 5-gallon bucket", state: [0, 4] }
  ];
  
  newSolution.forEach((step, index) => {
    console.log(`Step ${index + 1}: ${step.action} - State: (${step.state[0]},${step.state[1]})`);
  });
  
  console.log(`\nTotal steps: ${newSolution.length}`);
  
  console.log("\nAll solutions are valid and take less than 15 steps.");
}

main(); 