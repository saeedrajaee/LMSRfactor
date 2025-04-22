
import getPiezometerAcid from "./components/action/piezometerAcid.api";
import PiezometerAcidForm from "./components/index";

export default async function PiezometerAcidPage() {
  const PiezometerAcid = await getPiezometerAcid();
  return (
    <>
      <PiezometerAcidForm PiezometerAcid={PiezometerAcid} />
    </>
  );
}
