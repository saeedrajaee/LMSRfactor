
import getWellWaterLevel from "./components/action/wellWaterLevel.api";
import WellWaterLevelForm from "./components/index";

export default async function WellWaterLevelPage() {
  const WellWaterLevel = await getWellWaterLevel();
  return (
    <>
      <WellWaterLevelForm WellWaterLevel={WellWaterLevel} />
    </>
  );
}
