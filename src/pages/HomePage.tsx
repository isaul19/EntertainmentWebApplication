import { styled } from "../../styled-system/jsx";
import { SearchBar } from "@/components/appLayout";

export const HomePage = () => {
  return (
    <styled.main display="flex" flexDirection="column">
      <SearchBar placeholder="Search for movies or TV series" />
    </styled.main>
  );
};
