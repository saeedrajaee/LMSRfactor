import AreaChart from "./chart1";
import getGcp from "../../gcp/components/action/gcp.api";

export default async function App() {

  const dataProps = await getGcp() || [];

  // console.log("..................",dataProps)

  return (
    <>
    <div>
      <AreaChart data={dataProps}/>
    </div></>
  );
};