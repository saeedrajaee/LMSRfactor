
import getCopperConcentration from "./components/action/copperConcentration.api";
import CopperConcentrationForm from "./components/index";

export default async function CopperConcentrationPage() {
  const CopperConcentration = await getCopperConcentration();
  return (
    <>
      <CopperConcentrationForm CopperConcentration={CopperConcentration} />
    </>
  );
}
