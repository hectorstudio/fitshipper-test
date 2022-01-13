import axios from "axios";

const API_ADDRESS = process.env.REACT_APP_API_ADDRESS;

export interface Address {
  id: string;
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}

export const getAddresses = async () => {
  const url = `${API_ADDRESS}/v1/address?orderBy=id&direction=desc`;
  try {
    const response = await axios.get<Address[]>(url);
    return response.data;
  } catch (error) {
    return [];
  }
};
