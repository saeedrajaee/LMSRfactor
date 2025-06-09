import { getSession } from "@/lib/session";

const Home = async () => {
// export default function Home() {
  const session = await getSession()
  console.log(".............session............",session?.user.name)
  return (
    <>صفحه اصلی</>
  );
}
export default Home;
