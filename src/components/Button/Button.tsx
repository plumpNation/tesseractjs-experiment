import { FC } from "react";
import { chakra } from "@chakra-ui/react"

interface ButtonProps {
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ onClick, children }) => (
  <chakra.button
    px='3'
    py='2'
    bg='green.200'
    rounded='md'
    _hover={{ bg: 'green.300' }}
    onClick={onClick}
  >
    {children}
  </chakra.button>
);
