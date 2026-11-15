import { Flex, Heading, Text } from "@chakra-ui/react";
import { FaCat, FaDog } from "react-icons/fa6";

import SpeciesButton from "../components/SpeciesButton.component";
import type { PetType } from "../types/quiz.types";

export default function SpeciesSelectView({ onSelect }: { onSelect: (petType: PetType) => void }) {
  return (
    <Flex direction="column" align="center" gap={{ base: 8, md: 10 }} textAlign="center">
      <Flex direction="column" align="center" gap={2}>
        <Heading fontSize={{ base: "28", md: "36" }} color="TitleBlue" fontWeight="700">
          Guess the Breed
        </Heading>
        <Text fontSize={{ base: "15", md: "18" }} color="GreyText" maxW="360px">
          Pick a cat or a dog, look at the photo, and type your best guess at the breed.
        </Text>
      </Flex>

      <Flex gap={{ base: 8, md: 16 }}>
        <SpeciesButton icon={<FaCat />} label="Cat" onClick={() => onSelect("cat")} />
        <SpeciesButton icon={<FaDog />} label="Dog" onClick={() => onSelect("dog")} />
      </Flex>
    </Flex>
  );
}
