/**
 * Triangle Area Calculator
 * 
 * Problem: Write a function that takes the base and height of a triangle and returns its area.
 */

/**
 * Calculates the area of a triangle using the formula: area = (base * height) / 2
 * @param base The base length of the triangle
 * @param height The height of the triangle
 * @returns The area of the triangle
 */
function calculateTriangleArea(base: number, height: number): number {
  // Validate inputs
  if (base <= 0 || height <= 0) {
    throw new Error("Base and height must be positive numbers");
  }
  
  // Calculate the area using the formula: area = (base * height) / 2
  const area = (base * height) / 2;
  
  return area;
}

/**
 * Main function to demonstrate the triangle area calculation
 */
function main(): void {
  console.log("Triangle Area Calculator\n");
  
  // Example 1
  const base1 = 5;
  const height1 = 8;
  console.log(`Example 1: Triangle with base ${base1} and height ${height1}`);
  console.log(`Area: ${calculateTriangleArea(base1, height1)}`);
  
  // Example 2
  const base2 = 3;
  const height2 = 4;
  console.log(`\nExample 2: Triangle with base ${base2} and height ${height2}`);
  console.log(`Area: ${calculateTriangleArea(base2, height2)}`);
  
  // Example 3
  const base3 = 10;
  const height3 = 12;
  console.log(`\nExample 3: Triangle with base ${base3} and height ${height3}`);
  console.log(`Area: ${calculateTriangleArea(base3, height3)}`);
  
  // Interactive example (would require user input in a real application)
  console.log("\nTo calculate the area of your own triangle, call the function with your values:");
  console.log("calculateTriangleArea(base, height)");
}

// Export the function for use in other files
export { calculateTriangleArea };

// Run the main function if this file is executed directly
if (require.main === module) {
  main();
} 