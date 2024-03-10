import { Box, Container, Heading, Text, SimpleGrid, Button, Image, Flex, VStack, useColorModeValue, Link, Icon } from "@chakra-ui/react";
import { FaChalkboardTeacher, FaBookOpen, FaUsers, FaRegLightbulb, FaPlus } from "react-icons/fa";

const Index = () => {
  const Feature = ({ title, icon, children }) => {
    return (
      <VStack>
        <Icon as={icon} w={10} h={10} />
        <Heading as="h3" size="lg">
          {title}
        </Heading>
        <Text>{children}</Text>
      </VStack>
    );
  };

  return (
    <Container maxW="container.xl">
      <Box textAlign="center" py={10}>
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to LearnSphere
        </Heading>
        <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.200")}>
          Your pixelated gateway to a universe of knowledge.
        </Text>
        <Image src="https://images.unsplash.com/photo-1578301978961-a526d6fb0d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaXhlbCUyMGFydCUyMGVkdWNhdGlvbnxlbnwwfHx8fDE3MTAwNzEwMzF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Pixel Art Education" my={10} borderRadius="md" />
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        <Feature title="Curated Paths" icon={FaChalkboardTeacher}>
          Explore expertly designed learning paths to guide your educational journey.
        </Feature>
        <Feature title="Interactive Lessons" icon={FaBookOpen}>
          Dive into engaging lessons with cutting-edge animations to enhance your learning.
        </Feature>
        <Feature title="Community Forums" icon={FaUsers}>
          Join discussions, share insights, and connect with learners worldwide.
        </Feature>
        <Feature title="Expert Contributions" icon={FaRegLightbulb}>
          Learn from professionals and thought leaders across various fields.
        </Feature>
      </SimpleGrid>

      <Flex justifyContent="center" my={14}>
        <Link href="/explore" _hover={{ textDecoration: "none" }}>
          <Button rightIcon={<FaPlus />} colorScheme="blue" size="lg">
            Explore Learning Hubs
          </Button>
        </Link>
      </Flex>

      <Box textAlign="center" py={10} borderTopWidth={1}>
        <Heading as="h2" size="xl" mb={4}>
          Join the LearnSphere Community Today!
        </Heading>
        <Text fontSize="lg" mb={8} color={useColorModeValue("gray.600", "gray.200")}>
          Become a part of a growing community dedicated to lifelong learning.
        </Text>
        <Button colorScheme="green" size="lg">
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Index;
