import getGcp from "./components/action/gcp.api";
import GcpForm from "./components/index";

export default async function GcpPage() {
  const Gcp = await getGcp();
  return (
    <>
      <GcpForm Gcp={Gcp} />
    </>
  );
}
