import React, { useEffect, useState } from "react";
import { createInferTypeNode } from "typescript";
import { Address } from "../services/addresses";
import { FormProps } from "./FieldsForm";

const FreeForm = ({ data, onSwitch, onSubmit, onClose }: FormProps) => {
  const [formData, setFormData] = useState<Address>({} as Address);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleFreeFormText = (e: string) => {
    const copy = {} as Address;
    let rows = e.split("\n");
    copy.name = rows[0];
    if (rows[1]) {
      copy.address1 = rows[1];
    }
    if (rows[2]) {
      rows = rows[2].split(",");
      copy.city = rows[0];
      if (rows[1]) {
        rows = rows[1].split(" ");
        copy.state = rows[0];
        if (rows[1]) {
          copy.zip = rows[1];
        }
      }
    }
    setFormData(copy);
  };

  return (
    <div className="p-4 lg:col-span-2">
      <button
        type="button"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={onSwitch}
      >
        Switch to Fields
      </button>
      <div className="mt-2 block sm:gap-x-8">
        <div className="sm:col-span-2">
          <div className="flex flex-col justify-between">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-warm-gray-900"
            >
              Address (free-form)
            </label>
            <span id="message-max" className="text-sm text-warm-gray-500">
              Copy & paste the full address
            </span>
          </div>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows={4}
              value={`${formData.name || ""}\n${formData.address1 || ""} ${
                formData.address2 || ""
              }${
                formData.city || formData.state || formData.zip
                  ? `\n${formData.city || ""}, ${formData.state || ""} ${
                      formData.zip || ""
                    }`
                  : ""
              }`}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleFreeFormText(e.target.value)
              }
              className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md"
              aria-describedby="message-max"
            />
          </div>
        </div>
        <div className="sm:col-span-2 sm:flex sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="mt-2 mr-2 w-full inline-flex items-center justify-center px-6 py-3 border border-black-700 rounded-md shadow-sm text-base font-medium text-black bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={() => onSubmit(formData)}
            className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeForm;
