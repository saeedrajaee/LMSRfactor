import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function MainPage({ uploadFiles }) {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg gap-4">
      {" "}
      <div className="flex justify-between">
        <h1 className="font-semibold text-3xl p-2"> Library </h1>
        <Button className="w-52 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <Link href="/upload/add" className="custom-primary-btn">
            Add File
          </Link>
        </Button>
      </div>
      {uploadFiles.map((uploadFile, key) => (
        <div key={uploadFile.id} className="p-4 max-w-lg mx-auto bg-gray-100 shadow-md rounded-lg">
          <div className="p-4 max-w-lg mx-auto bg-gray-100 shadow-md rounded-lg">
            <div className="gap-4 flex flex-row justify-center">
              <img src={"http://localhost:8000/pdf.png"} />
            </div>
            <div className="flex flex-row justify-between ">
              <Label htmlFor="name" className="text-sm font-extrabold text-gray-700">
                Title:
              </Label>
            </div>
            <div className="flex flex-row justify-between">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                {uploadFile.name}
              </Label>
            </div>
            <div className="flex flex-row justify-between">
              <Label htmlFor="name" className="text-sm font-extrabold text-gray-700">
                Description:
              </Label>
            </div>
            <div className="flex flex-row justify-between">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                {uploadFile.description}
              </Label>
            </div>
          </div>
          <div className="p-4 max-w-lg mx-auto bg-gray-100 shadow-md rounded-lg">
            <div className="flex flex-row justify-center">
              <Label htmlFor="name" className="text-sm font-medium text-blue-700 ">
                <Link href={`http://localhost:8000/${uploadFile.id}.pdf`} target="_blank">Read Me More</Link>
              </Label>
            </div>
          </div>
           </div>
      ))}
    </div>
  );
}

export default MainPage;
