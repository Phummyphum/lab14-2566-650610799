"use client";
import {
  Button,
  Container,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" />
      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        minRows={3}
      />
      <Button mt="xs" color="orange">
        Submit Review
      </Button>

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Phumrapee Tapwong 650610799
      </Text>
    </Container>
  );
}
