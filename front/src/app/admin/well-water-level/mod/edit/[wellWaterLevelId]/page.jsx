import * as React from 'react'
import EditWellWaterLevel from "@/app/admin/well-water-level/components/edit";
import {getUniqueWellWaterLevel} from "../../../components/action/wellWaterLevel.api";

export default async function WellWaterLevelEditPage ({ params,searchParams }) {

  const WellWaterLevel = await getUniqueWellWaterLevel(params.wellWaterLevelId);

    return (
    <div>
      <EditWellWaterLevel searchParams={searchParams}  WellWaterLevel={WellWaterLevel} />
    </div>
  );
};
