import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { render } from "react-dom";

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

const Sidebar = ({ items }) => {
  const [renderedItems, setRenderedItems] = useState(items);

  const [searchResultCount, setSRC] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const closestMatches = getClosestMatches(searchText, items, "text", 2);

    setRenderedItems(closestMatches);
    setSRC(closestMatches.length);
  }, [searchText, items]);

  console.log(renderedItems);
  return (
    <div
      className="sidebar"
      style={{ backgroundColor: useColorModeValue("#FFFFFF", "#111010") }}
      mode={useColorModeValue("light", "dark")}
    >
      <div className="sbTop">
        <img
          src={useColorModeValue("./bannerLight.png", "./banner.png")}
          className="banner"
        ></img>
        <div className="searchParent">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon />
            </InputLeftElement>
            <Input
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              className="search"
              type="text"
              placeholder="Search"
            />
          </InputGroup>
          {searchText != "" ? (
            <p className="searchResText" id="searchResults">
              {searchText == "" ? items.length : searchResultCount} Search
              Result
              {(searchText == "" ? items : renderedItems).length != 1
                ? "s"
                : ""}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>

      <hr style={{ marginTop: 20 }} />
      <div className="items">
        {(searchText == "" ? items : renderedItems).map((page) => {
          return (
            <Link
              to={page.path}
              className="sb-l"
              mode={useColorModeValue("light", "dark")}
              key={page.path}
            >
              <Icon
                as={page.icon}
                style={{
                  width: 25,
                  height: 25,
                  color: useColorModeValue("#242424", "white"),
                }}
              ></Icon>
              <p style={{ color: useColorModeValue("#242424", "white") }}>
                {page.text}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
