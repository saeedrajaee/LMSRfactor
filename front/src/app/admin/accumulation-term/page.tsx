
import getAccumulationTerm from "./components/action/accumulation-term.api";
import AccumulationTermForm from "./components/index";

export default async function AccumulationTermPage() {
  const AccumulationTerm = await getAccumulationTerm();
  return (
    <>
      <AccumulationTermForm AccumulationTerm={AccumulationTerm} />
    </>
  );
}
