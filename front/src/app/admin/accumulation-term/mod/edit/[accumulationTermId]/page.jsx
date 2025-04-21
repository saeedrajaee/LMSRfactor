import * as React from 'react'
import EditAccumulationTerm from "@/app/admin/accumulation-term/components/edit";
import {getUniqueAccumulationTerm} from "../../../components/action/accumulation-term.api";

export default async function AccumulationTermAddPage ({ params,searchParams }) {

  const accumulationTerm = await getUniqueAccumulationTerm(params.accumulationTermId);

    return (
    <div>
      <EditAccumulationTerm searchParams={searchParams}  accumulationTerm={accumulationTerm} />
    </div>
  );
};
