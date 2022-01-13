import React, { useEffect, useState } from "react";
import { Address } from "../services/addresses";

export interface FormProps {
  data: Address;
  onSwitch: () => void;
  onSubmit: (e: Address) => void;
  onClose: () => void;
}

const FieldsForm = ({ data, onSwitch, onSubmit, onClose }: FormProps) => {
  const [formData, setFormData] = useState<Address>({} as Address);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  return (
    <div className="p-4 lg:col-span-2">
      <button
        type="button"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={onSwitch}
      >
        Switch to Freeform
      </button>
      <div className="mt-2 block sm:gap-x-8">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-warm-gray-900"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, name: e.target.value })
              }
              autoComplete="given-name"
              className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="address1"
            className="block text-sm font-medium text-warm-gray-900"
          >
            Address
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="address1"
              id="address1"
              value={formData.address1 || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, address1: e.target.value })
              }
              autoComplete="address1"
              className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="address2"
            className="block text-sm font-medium text-warm-gray-900"
          >
            Address 2 (optional)
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="address2"
              id="address2"
              value={formData.address2 || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, address2: e.target.value })
              }
              autoComplete="address2"
              className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-warm-gray-900"
          >
            City
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="city"
              id="city"
              value={formData.city || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, city: e.target.value })
              }
              autoComplete="city"
              className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-warm-gray-900"
          >
            State
          </label>
          <div className="mt-1">
            <select
              id="state"
              name="state"
              autoComplete="state"
              className="py-3 px-4 block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border border-gray-300 rounded-md"
              value={formData.city || ""}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFormData({ ...formData, state: e.target.value })
              }
            >
              <option>CA</option>
              <option>NV</option>
              <option>NY</option>
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="zip"
            className="block text-sm font-medium text-warm-gray-900"
          >
            Zip Code
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="zip"
              id="zip"
              value={formData.zip || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, zip: e.target.value })
              }
              autoComplete="zip"
              className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-gray-300 rounded-md"
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

export default FieldsForm;
