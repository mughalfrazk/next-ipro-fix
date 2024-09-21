import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { logoutAction } from "@/lib/actions/auth.action";
import IproButton from "@/components/core/IproButton";

const Page = async () => {
  const session = await auth();
  if (!session) return redirect("/auth");

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <form action={logoutAction}>
        <IproButton isSubmit={true} >Logout</IproButton>
      </form>
    </div>
  );
};

export default Page;
