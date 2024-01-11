import { IconSearch } from "@/assets/icons";
import { styled } from "../../../styled-system/jsx";

interface Props {
  placeholder: string;
}

export const SearchBar = ({ placeholder }: Props) => {
  return (
    <styled.search>
      <styled.label display="flex" gap={24}>
        <IconSearch />
        <styled.input
          type="text"
          placeholder={placeholder}
          outline="none"
          bg="transparent"
          opacity={0.5}
          fontSize={"24px"}
          fontWeight={300}
        />
      </styled.label>
    </styled.search>
  );
};
