
import getPls from "./components/action/pls.api";
import PlsForm from "./components/index";

export default async function PlsPage() {
  const Pls = await getPls();
  return (
    <>
      <PlsForm Pls={Pls} />
    </>
  );
}
