import AreaChart from "./chart1";
import getCopperConcentration from "../../copper-concentration/components/action/copperConcentration.api";

export default async function App() {

  const dataProps = await getCopperConcentration() || [];

  return (
    <>
    <div>
      <AreaChart data={dataProps}/>
    </div></>
  );
};