import { FormLogin } from "@/components/FormLogin/FormLogin";

export default function LoginPage() {
  return (
    <main className="flex min-w-full min-h-full p-3 items-center justify-center">
      <div  className="flex justify-center min-w-[30vw] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <FormLogin />
      </div>
    </main>
  );
}
