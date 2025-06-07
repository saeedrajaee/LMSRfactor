import getPiezometerAcid from "../../piezometer-acid/components/action/piezometerAcid.api";
import AreaChart from "./chart1";

export default async function App() {

  const dataProps = await getPiezometerAcid() || [];

  return (
    <>
    <div>
      <AreaChart data={dataProps}/>
    </div></>
  );
};