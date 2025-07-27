import getAccumulationTerm from "../../accumulation-term/components/action/accumulation-term.api";
import AreaChart from "./chart1";

export default async function App() {

  const dataProps = await getAccumulationTerm() || [];

  return (
    <>
    <div>
      <AreaChart data={dataProps}/>
    </div></>
  );
};