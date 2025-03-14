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

## License

ISC 