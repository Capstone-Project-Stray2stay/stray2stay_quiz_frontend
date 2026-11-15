import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

export default function QuizCard({ children }: { children: ReactNode }) {
  return (
    <Flex
      direction="column"
      align="center"
      bg="White"
      rounded={{ base: "20px", md: "28px" }}
      boxShadow="0px 4.43px 20.15px rgba(0,0,0,0.08)"
      p={{ base: 5, md: 8 }}
      w="full"
      maxW="420px"
      gap={5}
    >
      {children}
    </Flex>
  );
}

export function QuizImage({ src }: { src: string }) {
  return (
    <Box
      w="full"
      h={{ base: "220px", md: "280px" }}
      rounded={{ base: "14px", md: "20px" }}
      overflow="hidden"
      bg="#E9E9E9"
    >
      <img
        src={src}
        alt="Guess the breed"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </Box>
  );
}
