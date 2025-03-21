# TypeScript Project

A simple TypeScript project initialized with pnpm.

## Book E-Commerce Platform

This project includes a full-featured e-commerce platform for books that allows users to:

1. Search for books by title, author, and other criteria
2. View book details
3. Place orders for books
4. Receive an email with a placeholder eBook file

The platform is built using:
- Express.js for the web server
- EJS for templating
- PDFKit for generating placeholder eBook files
- Nodemailer for sending emails

To run the e-commerce platform:

```bash
pnpm ecommerce
```

Then open your browser to `http://localhost:3000` to view the platform.

### Features

- **Book Browsing**: Browse and search through a collection of books
- **Order Processing**: Place orders for books with customer information
- **Email Delivery**: Receive order confirmation emails with attached eBook files
- **Responsive Design**: Works on desktop and mobile devices

### Implementation Details

- Uses in-memory storage for books and orders
- Generates placeholder PDF files to represent eBooks
- Sends emails using Ethereal for testing (no real emails are sent)

## Word Finder

This project includes a word finder program that takes a letter combination and creates an alphabetical list of all words that can be formed using those letters. The program uses a Scrabble dictionary to find valid words.

By default, the program uses the letters "tabind", but you can specify your own letters as a command-line argument:

```bash
# Use default letters "tabind"
pnpm find-words

# Use custom letters
pnpm find-words "letters"
```

The program will output:
1. Words that use exactly the given letters once
2. All possible words (3+ letters) that can be formed from the given letters

## Water Bucket Problem

This project also includes a solution to the classic water bucket problem:

**Problem**: Two kids need to fetch exactly 4 gallons of water from a stream, using only an unmarked 3-gallon bucket and an unmarked 5-gallon bucket. The solution should take less than 15 steps.

The program implements a breadth-first search algorithm to find the optimal solution automatically. It also demonstrates two additional solution approaches.

To run the water bucket problem solution:

```bash
pnpm water-bucket
```

The program demonstrates three different solutions:
1. Algorithmic solution using breadth-first search (6 steps)
2. Starting by filling the 5-gallon bucket (6 steps)
3. Starting by filling the 3-gallon bucket (8 steps)

### How the Algorithm Works

The program uses breadth-first search to explore all possible states of the buckets until it finds a state where one of the buckets contains exactly 4 gallons of water. The algorithm:

1. Starts with both buckets empty
2. Explores all possible actions at each step:
   - Fill either bucket
   - Empty either bucket
   - Pour water from one bucket to the other
3. Keeps track of visited states to avoid cycles
4. Finds the shortest path to the goal state

This approach guarantees finding the optimal solution with the minimum number of steps.

## Traveling Politician Problem

This project includes a solution to the traveling politician problem, which is a variant of the classic Traveling Salesman Problem (TSP):

**Problem**: A politician has to start his campaign in the capital of Iowa (Des Moines), visit every state capital including Hawaii and Alaska, and end up in Washington DC at the White House. Each state capital should be visited exactly once. The goal is to determine the best route and the total distance of this route.

To run the traveling politician problem solution:

```bash
pnpm traveling-politician
```

### How the Algorithm Works

The program uses the Nearest Neighbor algorithm to find a reasonably good solution to this complex problem:

1. Start at the specified starting point (Des Moines, Iowa)
2. At each step, visit the nearest unvisited state capital
3. After visiting all state capitals, go to the ending point (Washington DC)
4. Calculate the total distance of the route

The program uses the Haversine formula to calculate the distance between locations, which accounts for the curvature of the Earth. This provides accurate distances between geographical coordinates.

While the Nearest Neighbor algorithm doesn't guarantee the optimal solution to the Traveling Salesman Problem (which is NP-hard), it provides a good approximation in reasonable time.

## Triangle Area Calculator

This project includes a simple function to calculate the area of a triangle:

**Problem**: Write a function that takes the base and height of a triangle and returns its area.

The solution uses the standard formula for calculating the area of a triangle: `area = (base * height) / 2`.

To run the triangle area calculator:

```bash
pnpm triangle-area
```

The program demonstrates the calculation with several examples and validates that the inputs are positive numbers.

### Usage in Other Files

The `calculateTriangleArea` function is exported and can be imported into other files:

```typescript
import { calculateTriangleArea } from './triangleArea';

// Calculate the area of a triangle with base 5 and height 8
const area = calculateTriangleArea(5, 8);
console.log(`The area is: ${area}`); // Output: The area is: 20
```

## Prerequisites

- Node.js (v14 or higher recommended)
- pnpm package manager

## Installation

Clone the repository and install dependencies:

```bash
pnpm install
```

## Development

To run the project in development mode:

```bash
pnpm dev
```

This will run the TypeScript code directly using ts-node.

## Building

To compile the TypeScript code to JavaScript:

```bash
pnpm build
```

The compiled JavaScript will be in the `dist` directory.

## Running

To run the compiled JavaScript:

```bash
pnpm start
```

## Scripts

- `pnpm dev` - Run the project in development mode
- `pnpm build` - Compile TypeScript to JavaScript
- `pnpm start` - Run the compiled JavaScript
- `pnpm watch` - Watch for changes and recompile
- `pnpm clean` - Remove the dist directory
- `pnpm test` - Run tests (not configured yet)
- `pnpm find-words` - Run the word finder program
- `pnpm water-bucket` - Run the water bucket problem solver
- `pnpm traveling-politician` - Run the traveling politician problem solver
- `pnpm triangle-area` - Run the triangle area calculator
- `pnpm ecommerce` - Run the book e-commerce platform

## License

ISC 