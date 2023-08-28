"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
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
      <Divider mt="sm"></Divider>
      <Group position="center" mt="sm">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} readOnly></Rating>
      </Group>
      <Text align="center" color="dimmed">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider mt="sm"></Divider>
      <Group position="center" mt="sm">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly></Rating>
      </Group>
      <Text align="center" color="dimmed">
        My favourite part is pepperoni
      </Text>
      <Pagination
        total={20}
        mt="sm"
        position="center"
        color="orange"
      ></Pagination>
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Phumrapee Tapwong 650610799
      </Text>
    </Container>
  );
}
