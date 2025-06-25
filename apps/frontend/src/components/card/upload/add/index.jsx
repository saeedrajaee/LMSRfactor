"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createLibrary, uploadFile } from "@/lib/actions";
import { useActionState } from "react";

const AddPage = () => {
  const [state, action] = useActionState(createLibrary, undefined);
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      {!!state?.message && <p className="text-green-500">{state.message}</p>}
      <form action={action}>
        <div>
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Document Name
            </Label>
            <Input placeholder="Enter Document Name" name="name" />
          </div>
          <div className="grid gap-2">
            <Label
              htmlFor="description"
              className="text-sm font-medium text-gray-700"
            >
              Description
            </Label>
            <textarea
              id="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Document Description"
              name="description"
            ></textarea>
          </div>
        </div>
        <div>
          <Label htmlFor="file" className="text-sm font-medium text-gray-700">
            Choose a file
          </Label>
          <Input name="file" id="file" type="file" className="mt-2" />
          {!!state?.errors?.file && (
            <p className="text-red-500">{state?.errors?.file}</p>
          )}

          <Button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Upload
          </Button>
        </div>
      </form>
      {/* <img src="http://localhost:8000/4.png"/> */}
    </div>
  );
};
export default AddPage;
