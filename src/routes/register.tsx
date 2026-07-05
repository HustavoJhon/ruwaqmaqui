import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/register")({
  component: Register,
});

function Register() {
  return (
    <main>
      <h1>Register</h1>
      <form>
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Sign up</button>
      </form>
    </main>
  );
}
