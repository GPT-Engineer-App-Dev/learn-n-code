import React from 'react';
import { Box, Container, Heading, Text, VStack, Button, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaCode, FaBook, FaUsers } from "react-icons/fa";

const FeatureCard = ({ icon, title, description }) => (
  <Box borderWidth={1} borderRadius="lg" p={5}>
    <VStack spacing={3} align="center">
      <Icon as={icon} boxSize={10} color="blue.500" />
      <Heading size="md">{title}</Heading>
      <Text textAlign="center">{description}</Text>
    </VStack>
  </Box>
);

const Index = () => {
  return (
    <Box>
      <Container maxW="container.xl" py={10}>
        <VStack spacing={10}>
          <Heading as="h1" size="2xl" textAlign="center">
            Welcome to CodeLearn
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Your gateway to mastering coding skills online
          </Text>
          <Button colorScheme="blue" size="lg">
            Start Learning Now
          </Button>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} width="full">
            <FeatureCard
              icon={FaCode}
              title="Interactive Coding"
              description="Practice coding in real-time with our interactive platform"
            />
            <FeatureCard
              icon={FaBook}
              title="Comprehensive Courses"
              description="Access a wide range of coding courses for all levels"
            />
            <FeatureCard
              icon={FaUsers}
              title="Community Support"
              description="Join our community of learners and mentors"
            />
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;