import axiosInstance from "./axiosInstance";
import type { PetType, QuizQuestionResponse, QuizAnswerResponse } from "../types/quiz.types";

export async function getQuizQuestionAPI(petType: PetType): Promise<QuizQuestionResponse> {
  const { data } = await axiosInstance.get<QuizQuestionResponse>("/quiz/question", {
    params: { petType },
  });
  return data;
}

export async function submitQuizAnswerAPI(token: string, guess: string): Promise<QuizAnswerResponse> {
  const { data } = await axiosInstance.post<QuizAnswerResponse>("/quiz/answer", { token, guess });
  return data;
}
