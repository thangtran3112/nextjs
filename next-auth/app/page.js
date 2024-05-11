import AuthForm from "@/components/auth-form";
import { Login } from "@/lib/constants";

export default async function Home({ searchParams }) {
  const formMode = searchParams.mode || Login;
  return <AuthForm mode={formMode} />;
}
