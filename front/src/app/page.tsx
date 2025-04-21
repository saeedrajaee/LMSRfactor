import { revalidatePath } from "next/cache";
import Dashbaord from "./admin/dashboard/page";
import Login from "./auth/login/page";
import Signup from "./auth/signup/page";
import getMe from "./get-me";
import { redirect } from "next/navigation";

export default async function Home() {
  const me = await getMe();
  console.log("mememememememememememememememe", me.userId);
  if (me) {
    return (
      <>
        <Login />
      </>
    );
  } else {
    return (
      <>
        <Signup />
      </>
    );
  }
}
