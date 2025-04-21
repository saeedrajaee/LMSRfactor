import * as React from 'react'
import EditPiezometerAcid from "@/app/admin/piezometer-acid/components/edit";
import {getUniquePiezometerAcid} from "../../../components/action/piezometerAcid.api";

export default async function PiezometerAcidEditPage ({ params,searchParams }) {

  const PiezometerAcid = await getUniquePiezometerAcid(params.piezometerAcidId);

    return (
    <div>
      <EditPiezometerAcid searchParams={searchParams}  PiezometerAcid={PiezometerAcid} />
    </div>
  );
};
