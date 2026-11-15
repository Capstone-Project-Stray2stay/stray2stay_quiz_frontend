import { Flex, Heading, Image, Text } from "@chakra-ui/react";

import SpeciesButton from "../components/SpeciesButton.component";
import type { PetType } from "../types/quiz.types";

export default function SpeciesSelectView({ onSelect }: { onSelect: (petType: PetType) => void }) {
  return (
    <Flex direction="column" align="center" gap={{ base: 8, md: 10 }} textAlign="center">
      <Flex direction="column" align="center" gap={2}>
        <Heading fontSize={{ base: "36", md: "48" }} color="TitleBlue" fontWeight="700">
          Guess the Breed
        </Heading>
        <Text fontSize={{ base: "18", md: "22" }} color="GreyText" maxW="420px">
          Pick a cat or a dog, look at the photo, and type your best guess at the breed.
        </Text>
      </Flex>

      {/* Same Cream circle + brand icon pattern as S2SPetIconButton on the main site's adopt page */}
      <Flex gap={{ base: 8, md: 16 }}>
        <SpeciesButton
          icon={<Image src="/assets/icons/dog.png" alt="Dog" boxSize={{ base: "64px", md: "88px" }} objectFit="contain" />}
          label="Dog"
          onClick={() => onSelect("dog")}
        />
        <SpeciesButton
          icon={<Image src="/assets/icons/cat.png" alt="Cat" boxSize={{ base: "64px", md: "88px" }} objectFit="contain" />}
          label="Cat"
          onClick={() => onSelect("cat")}
        />
      </Flex>
    </Flex>
  );
}
