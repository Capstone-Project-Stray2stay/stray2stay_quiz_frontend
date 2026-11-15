export type PetType = "cat" | "dog";

export interface QuizQuestionResponse {
  token: string;
  petType: PetType;
  imageUrl: string;
  message: string;
}

export interface QuizAnswerResponse {
  correct: boolean;
  correctBreed: string;
  message: string;
}
