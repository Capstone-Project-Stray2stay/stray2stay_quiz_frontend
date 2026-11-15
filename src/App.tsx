import { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";

import SpeciesSelectView from "./views/SpeciesSelectView";
import QuestionView from "./views/QuestionView";
import ResultView from "./views/ResultView";
import { getQuizQuestionAPI, submitQuizAnswerAPI } from "./services/quiz.api";
import type { PetType } from "./types/quiz.types";

type Stage =
  | { name: "select" }
  | { name: "question"; petType: PetType; token: string; imageUrl: string }
  | { name: "result"; petType: PetType; imageUrl: string; guess: string; correct: boolean; correctBreed: string };

export default function App() {
  const [stage, setStage] = useState<Stage>({ name: "select" });
  const [guess, setGuess] = useState("");
  const [loadingQuestion, setLoadingQuestion] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSelectSpecies(petType: PetType) {
    setLoadingQuestion(true);
    setErrorMessage(null);
    try {
      const question = await getQuizQuestionAPI(petType);
      setGuess("");
      setStage({ name: "question", petType, token: question.token, imageUrl: question.imageUrl });
    } catch {
      setErrorMessage("Couldn't load a question right now. Please try again.");
    } finally {
      setLoadingQuestion(false);
    }
  }

  async function handleSubmitGuess() {
    if (stage.name !== "question") return;
    setSubmitting(true);
    setErrorMessage(null);
    try {
      const result = await submitQuizAnswerAPI(stage.token, guess);
      setStage({
        name: "result",
        petType: stage.petType,
        imageUrl: stage.imageUrl,
        guess,
        correct: result.correct,
        correctBreed: result.correctBreed,
      });
    } catch {
      setErrorMessage("Couldn't check your answer. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function handlePlayAgain() {
    setGuess("");
    setErrorMessage(null);
    setStage({ name: "select" });
  }

  return (
    <Flex
      minH="100vh"
      w="full"
      direction="column"
      align="center"
      justify="center"
      bgGradient="PageBackground"
      px={4}
      py={10}
      gap={10}
    >
      <Flex direction="column" align="center" gap={1}>
        <Text fontSize={{ base: "20", md: "24" }} fontWeight="700" color="Blue">
          Stray2Stay
        </Text>
        <Text fontSize="14" color="GreyInfo" letterSpacing="1px" textTransform="uppercase">
          Breed Guessing Quiz
        </Text>
      </Flex>

      {stage.name === "select" && (
        <>
          <SpeciesSelectView onSelect={handleSelectSpecies} />
          {loadingQuestion && (
            <Text color="GreyText" fontSize="16">
              Loading a photo...
            </Text>
          )}
          {errorMessage && (
            <Text color="Red" fontSize="14">
              {errorMessage}
            </Text>
          )}
        </>
      )}

      {stage.name === "question" && (
        <QuestionView
          petType={stage.petType}
          imageUrl={stage.imageUrl}
          guess={guess}
          onGuessChange={setGuess}
          onSubmit={handleSubmitGuess}
          submitting={submitting}
          errorMessage={errorMessage}
        />
      )}

      {stage.name === "result" && (
        <ResultView
          imageUrl={stage.imageUrl}
          correct={stage.correct}
          correctBreed={stage.correctBreed}
          guess={stage.guess}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </Flex>
  );
}
