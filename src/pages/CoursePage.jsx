import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const CoursePage = () => {
  const { courseId } = useParams();

  return (
    <Box p={5}>
      <VStack spacing={5} align="start">
        <Heading as="h2" size="xl">Course {courseId}</Heading>
        <Text>Welcome to the course! Here you will find all the materials and resources you need.</Text>
      </VStack>
    </Box>
  );
};

export default CoursePage;