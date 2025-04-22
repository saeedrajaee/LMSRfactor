
import getPiezometerTemp from "./components/action/piezometerTemp.api";
import PiezometerTempForm from "./components/index";

export default async function PiezometerTempPage() {
  const PiezometerTemp = await getPiezometerTemp();
  return (
    <>
      <PiezometerTempForm PiezometerTemp={PiezometerTemp} />
    </>
  );
}
