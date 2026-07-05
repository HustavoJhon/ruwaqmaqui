import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main>
      <h1>ruwaqmaqui</h1>
      <p>Welcome</p>
    </main>
  );
}
