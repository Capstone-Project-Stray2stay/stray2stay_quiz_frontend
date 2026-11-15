import { Flex, Heading, Text } from "@chakra-ui/react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

import QuizCard, { QuizImage } from "../components/QuizCard.component";
import QuizButton from "../components/QuizButton.component";

export default function ResultView({
  imageUrl,
  correct,
  correctBreed,
  guess,
  onPlayAgain,
}: {
  imageUrl: string;
  correct: boolean;
  correctBreed: string;
  guess: string;
  onPlayAgain: () => void;
}) {
  return (
    <Flex direction="column" align="center" gap={5} w="full">
      <QuizCard>
        <QuizImage src={imageUrl} />

        <Flex direction="column" align="center" gap={2}>
          {correct ? <FaCircleCheck color="#5DB993" size={48} /> : <FaCircleXmark color="#D97D7D" size={48} />}

          <Heading fontSize={{ base: "22", md: "26" }} color={correct ? "AcceptGreen" : "Red"} fontWeight="700">
            {correct ? "Correct!" : "Not quite!"}
          </Heading>

          <Text fontSize="16" color="GreyText" textAlign="center">
            You guessed <b>{guess}</b>.
            {!correct && (
              <>
                {" "}
                The correct breed was <b>{correctBreed}</b>.
              </>
            )}
          </Text>
        </Flex>

        <QuizButton size="lg" onClick={onPlayAgain}>
          Play Again
        </QuizButton>
      </QuizCard>
    </Flex>
  );
}
