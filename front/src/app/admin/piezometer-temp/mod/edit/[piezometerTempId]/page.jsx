import * as React from 'react'
import EditPiezometerTemp from "@/app/admin/piezometer-temp/components/edit";
import {getUniquePiezometerTemp} from "../../../components/action/piezometerTemp.api";

export default async function PiezometerTempEditPage ({ params,searchParams }) {

  const PiezometerTemp = await getUniquePiezometerTemp(params.piezometerTempId);

    return (
    <div>
      <EditPiezometerTemp searchParams={searchParams}  PiezometerTemp={PiezometerTemp} />
    </div>
  );
};
