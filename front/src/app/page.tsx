import { revalidatePath } from "next/cache";
import Dashbaord from "./admin/dashboard/page";
import Login from "./auth/signin/page";
import Signup from "./auth/signup/page";
import { redirect } from "next/navigation";

export default async function Home() {

    return (
      <>
        <Signup />
      </>
    );
  }

