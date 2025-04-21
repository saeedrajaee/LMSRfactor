import * as React from 'react'
import EditPls from "@/app/admin/pls/components/edit";
import {getUniquePls} from "../../../components/action/pls.api";

export default async function PlsEditPage ({ params,searchParams }) {

  const Pls = await getUniquePls(params.plsId);

    return (
    <div>
      <EditPls searchParams={searchParams}  Pls={Pls} />
    </div>
  );
};
