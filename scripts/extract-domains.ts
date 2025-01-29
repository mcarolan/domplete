#!/usr/bin/env ts-node

import * as fs from "fs";
import * as path from "path";

// Paths
const inputFilePath = path.join(__dirname, "../resources/domains.csv");
const outputFilePath = path.join(__dirname, "../src/domains.json");

// Read file as raw text
const rawData = fs.readFileSync(inputFilePath, "utf-8");

// Split into lines
const lines = rawData.split("\n");

// Extract domains from the second column (skip the first row)
const domains: string[] = lines.slice(1) // Skip header
  .flatMap(line => {
    const cols = line.split(",")
    if (cols.length > 1) {
      return [cols[1].replace(/"/g, "").trim()];
    } else {
      return [];
    }
  });

// Write to JSON
fs.writeFileSync(outputFilePath, JSON.stringify(domains, null, 2));

console.log(`✅ Extracted ${domains.length} domains to ${outputFilePath}`);
