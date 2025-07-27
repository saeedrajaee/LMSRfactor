import * as React from 'react'
import EditGcp from "@/app/admin/gcp/components/edit";
import { getUniqueGcp } from "../../../components/action/gcp.api";

export default async function GcpEditPage({ params, searchParams }) {

  const Gcp = await getUniqueGcp(params.gcpId);

  return (
    <div>
      <EditGcp searchParams={searchParams} Gcp={Gcp} />
    </div>
  );
};
