import { Center, Loader } from "@mantine/core";

// Route-level Suspense fallback shown while a dashboard page's server component
// awaits data from the backend.
export default function Loading() {
  return (
    <Center h="100%" mih="60vh" w="100%">
      <Loader type="dots" size="xl" color="primary.6" />
    </Center>
  );
}
