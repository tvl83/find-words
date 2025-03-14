/**
 * Main entry point for the application
 */

function greet(name: string): string {
  return `Hello, ${name}!`;
}

function main(): void {
  const message = greet('World');
  console.log(message);
  console.log('TypeScript project is running!');
}

main(); 