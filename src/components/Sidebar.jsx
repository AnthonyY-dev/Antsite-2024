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
import search from "../hooks/search";
import DarkModeToggle from "./DarkToggle";
import renderNavigation from "../hooks/renderNavigation";

const Sidebar = ({ items, noRender }) => {
  const [renderedItems, setRenderedItems] = useState(items);

  const [searchResultCount, setSRC] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const closestMatches = search(searchText, items, "text", 2);

    setRenderedItems(closestMatches);
    setSRC(closestMatches.length);
  }, [searchText, items]);

  if (!renderNavigation(noRender)) {
    return "";
  }

  return (
    <div
      className="sidebar"
      style={{ backgroundColor: useColorModeValue("#FFFFFF", "#111010") }}
      mode={useColorModeValue("light", "dark")}
    >
      <div className="sbTop">
        <div className="darkModeToggleNav" style={{ marginTop: 10 }}>
          <DarkModeToggle></DarkModeToggle>
        </div>
        <img src={"bannerRimlessnobg.png"} className="banner"></img>
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
          <p style={{ marginTop: 10, fontSize: 20, fontWeight: 700 }}>
            Navigation
          </p>
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

      <div className="manhr"></div>
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
