import { Button } from "@chakra-ui/react";
import type { ReactNode } from "react";

type QuizButtonSize = "md" | "lg";

const SIZES: Record<QuizButtonSize, { minW: string; px: string; py: string; fontSize: string }> = {
  lg: { minW: "200px", px: "24px", py: "12px", fontSize: "20" },
  md: { minW: "160px", px: "16px", py: "10px", fontSize: "18" },
};

const DARK_TEXT_FILLS = ["Cream", "White", "Yellow"];

export default function QuizButton({
  children,
  bgColor = "Blue",
  variant = "solid",
  size = "md",
  w,
  loading,
  disabled,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  bgColor?: string;
  variant?: "solid" | "outline";
  size?: QuizButtonSize;
  w?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const isOutline = variant === "outline";
  const sizing = SIZES[size];
  const textColor = isOutline ? bgColor : DARK_TEXT_FILLS.includes(bgColor) ? "GreyText" : "white";

  return (
    <Button
      type={type}
      rounded="full"
      fontWeight="600"
      bg={isOutline ? "transparent" : bgColor}
      color={textColor}
      borderWidth={isOutline ? "1px" : undefined}
      borderColor={isOutline ? bgColor : undefined}
      _hover={isOutline ? { bg: "LineHover" } : { bg: `${bgColor}_hover` }}
      _active={isOutline ? { bg: "LineActive" } : { bg: `${bgColor}_active` }}
      minW={sizing.minW}
      w={w}
      px={sizing.px}
      py={sizing.py}
      fontSize={sizing.fontSize}
      whiteSpace="normal"
      h="auto"
      loading={loading}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
