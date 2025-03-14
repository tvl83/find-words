# TypeScript Project

A simple TypeScript project initialized with pnpm.

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

## License

ISC 