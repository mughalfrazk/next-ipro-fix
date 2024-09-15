import { auth } from "@/auth";
import { logoutAction } from "@/lib/actions/auth.action";

const Page = async () => {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <form action={logoutAction}>
        <button>Logout</button>
      </form>
    </div>
  );
};

export default Page;
