
import getFlow from "./components/action/flow.api";
import FlowForm from "./components/index";

export default async function FlowPage() {
  const Flow = await getFlow();
  return (
    <>
      <FlowForm Flow={Flow} />
    </>
  );
}
