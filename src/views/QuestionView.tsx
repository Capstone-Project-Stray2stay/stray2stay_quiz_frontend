import { Flex, Heading, Text } from "@chakra-ui/react";

import QuizCard, { QuizImage } from "../components/QuizCard.component";
import QuizButton from "../components/QuizButton.component";
import type { PetType } from "../types/quiz.types";

export default function QuestionView({
  petType,
  imageUrl,
  options,
  guess,
  onGuessChange,
  onSubmit,
  submitting,
  errorMessage,
}: {
  petType: PetType;
  imageUrl: string;
  options: string[];
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
            if (!submitting && guess) onSubmit();
          }}
        >
          <Flex direction="column" gap={3} w="full">
            {options.map((option) => (
              <QuizButton
                key={option}
                type="button"
                w="full"
                variant={guess === option ? "solid" : "outline"}
                disabled={submitting}
                onClick={() => onGuessChange(option)}
              >
                {option}
              </QuizButton>
            ))}
          </Flex>

          {errorMessage && (
            <Text color="Red" fontSize="14">
              {errorMessage}
            </Text>
          )}

          <QuizButton type="submit" size="lg" loading={submitting} disabled={!guess}>
            Submit Guess
          </QuizButton>
        </form>
      </QuizCard>
    </Flex>
  );
}
