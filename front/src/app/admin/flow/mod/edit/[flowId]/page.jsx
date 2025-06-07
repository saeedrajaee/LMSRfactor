import * as React from 'react'
import EditFlow from "@/app/admin/flow/components/edit";
import {getUniqueFlow} from "../../../components/action/flow.api";

export default async function FlowEditPage ({ params,searchParams }) {

  const Flow = await getUniqueFlow(params.flowId);

    return (
    <div>
      <EditFlow searchParams={searchParams}  Flow={Flow} />
    </div>
  );
};
