import getPls from "../../pls/components/action/pls.api";
import AreaChart from "./chart1";

export default async function App() {

  const dataProps = await getPls() || [];

  return (
    <>
    <div>
      <AreaChart data={dataProps}/>
    </div></>
  );
};