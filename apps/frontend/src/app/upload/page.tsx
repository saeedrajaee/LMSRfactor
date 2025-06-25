import MainPage from "@/components/card/upload"
import getLibrarys from "@/lib/actions";

export default async function Page() {
  const uploadFiles = await getLibrarys();
  console.log("uploadFiles...................",uploadFiles)
  return (
    <>
      <MainPage uploadFiles={uploadFiles}/>
    </>
  );
}
