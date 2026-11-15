import { Box, Text } from "@chakra-ui/react";

// Same copyright footer as the main site's S2SFooter, so the quiz reads as part of the same product.
export default function QuizFooter() {
  return (
    <Box px={{ base: "24px", md: "9%" }} py="20px">
      <Text textAlign="center" color="GreyInfo" fontSize={{ base: "12", md: "14" }} fontWeight="600">
        Copyright © 2026 Stray2stay. All rights reserved.
      </Text>
    </Box>
  );
}
