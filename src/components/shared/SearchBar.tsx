import { IconSearch } from "@/assets/icons";
import { styled } from "../../../styled-system/jsx";

interface Props {
  placeholder: string;
}

export const SearchBar = ({ placeholder }: Props) => {
  return (
    <styled.search fontSize="24px">
      <styled.label display="flex" gap={24} cursor="pointer">
        <IconSearch />
        <styled.input
          type="text"
          placeholder={placeholder}
          outline="none"
          bg="transparent"
          opacity={0.5}
          fontWeight={300}
          css={{
            _focus: {
              borderBottom: "1px solid",
              borderColor: "cs.greyish-blue",
            },
          }}
        />
      </styled.label>
    </styled.search>
  );
};
