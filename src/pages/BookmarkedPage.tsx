import { styled } from "../../styled-system/jsx";
import { SearchBar } from "@/components/appLayout";

export const BookmarkedPage = () => {
  return (
    <styled.main>
      <SearchBar placeholder="Search for bookmarked shows" />
    </styled.main>
  );
};
