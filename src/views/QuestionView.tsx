import { Flex, Heading, Input, Text } from "@chakra-ui/react";

import QuizCard, { QuizImage } from "../components/QuizCard.component";
import QuizButton from "../components/QuizButton.component";
import type { PetType } from "../types/quiz.types";

export default function QuestionView({
  petType,
  imageUrl,
  guess,
  onGuessChange,
  onSubmit,
  submitting,
  errorMessage,
}: {
  petType: PetType;
  imageUrl: string;
  guess: string;
  onGuessChange: (value: string) => void;
  onSubmit: () => void;
  submitting: boolean;
  errorMessage: string | null;
}) {
  return (
    <Flex direction="column" align="center" gap={5} w="full">
      <Heading fontSize={{ base: "22", md: "28" }} color="TitleBlue" fontWeight="700" textAlign="center">
        What breed is this {petType}?
      </Heading>

      <QuizCard>
        <QuizImage src={imageUrl} />

        <form
          style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}
          onSubmit={(e) => {
            e.preventDefault();
            if (!submitting && guess.trim()) onSubmit();
          }}
        >
          <Input
            value={guess}
            onChange={(e) => onGuessChange(e.target.value)}
            placeholder="Type the breed name..."
            size="lg"
            rounded="full"
            bg="White"
            borderColor="BabyGray"
            textAlign="center"
            autoFocus
          />

          {errorMessage && (
            <Text color="Red" fontSize="14">
              {errorMessage}
            </Text>
          )}

          <QuizButton type="submit" size="lg" loading={submitting} disabled={!guess.trim()}>
            Submit Guess
          </QuizButton>
        </form>
      </QuizCard>
    </Flex>
  );
}
