import React from 'react'

const search = (input, array, property, threshold) => {
  
function levenshteinDistance(a = "", b = "") {
    // Convert both strings to lowercase to make the comparison case-insensitive.
    a = a.toLowerCase();
    b = b.toLowerCase();
  
    // Create an empty 2D array with appropriate dimensions.
    const matrix = Array.from({ length: a.length + 1 }, () =>
      new Array(b.length + 1).fill(0)
    );
  
    // Initialize the first row and column of the matrix.
    for (let i = 0; i <= a.length; i++) {
      matrix[i][0] = i;
    }
    for (let j = 0; j <= b.length; j++) {
      matrix[0][j] = j;
    }
  
    // Populate the rest of the matrix with Levenshtein distances.
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1, // deletion
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j - 1] + cost // substitution
        );
      }
    }
  
    return matrix[a.length][b.length];
  }
  
  function getClosestMatches(input, array, property, threshold = 2) {
    if (!Array.isArray(array)) {
      console.log(typeof array);
      throw new Error("Expected an array for the 'array' parameter");
    }
  
    // Convert the input to lowercase to make the matching case-insensitive.
    const lowerCaseInput = input.toLowerCase();
  
    return array
      .map((obj) => {
        const target = obj[property].toLowerCase();
        const distance = levenshteinDistance(lowerCaseInput, target);
        const startsWithInput = target.startsWith(lowerCaseInput);
  
        return {
          ...obj,
          distance,
          startsWithInput,
        };
      })
      .filter((item) => item.distance <= threshold || item.startsWithInput)
      .sort((a, b) => {
        // Prioritize matches that start with the input, then sort by distance.
        if (a.startsWithInput !== b.startsWithInput) {
          return a.startsWithInput ? -1 : 1;
        }
        return a.distance - b.distance;
      })
      .map((item) => item);
  }
  return getClosestMatches(input, array, property, threshold)
}

export default search
