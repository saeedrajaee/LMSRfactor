import * as React from 'react'
import EditCopperConcentration from "@/app/admin/copper-concentration/components/edit";
import {getUniqueCopperConcentration} from "../../../components/action/copperConcentration.api";

export default async function CopperConcentrationEditPage ({ params,searchParams }) {

  const copperConcentration = await getUniqueCopperConcentration(params.copperConcentrationId);

    return (
    <div>
      <EditCopperConcentration searchParams={searchParams}  copperConcentration={copperConcentration} />
    </div>
  );
};
