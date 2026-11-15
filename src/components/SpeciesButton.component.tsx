import { VStack, Circle, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export default function SpeciesButton({
  icon,
  label,
  onClick,
}: {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <VStack gap={3} cursor="pointer" onClick={onClick} userSelect="none" role="group">
      <Circle
        size={{ base: "96px", md: "128px" }}
        bg="Cream"
        boxShadow="0px 4px 20px rgba(201,220,225,0.35)"
        transition="background 0.15s ease, transform 0.15s ease"
        fontSize={{ base: "40px", md: "56px" }}
        color="Grey"
        _groupHover={{ bg: "Cream_hover", transform: "scale(1.04)" }}
        _groupActive={{ bg: "Cream_active" }}
      >
        {icon}
      </Circle>
      <Text fontSize={{ base: "18", md: "22" }} fontWeight="600" color="Grey">
        {label}
      </Text>
    </VStack>
  );
}
