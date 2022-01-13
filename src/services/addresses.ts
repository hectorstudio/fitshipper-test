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

export const createNewAddress = async (e: Address) => {
  const url = `${API_ADDRESS}/v1/address`;
  try {
    const response = await axios.post<Address>(url, {
      ...e,
    });
    return response.data;
  } catch (error) {
    return null;
  }
}

export const updateAddress = async (e: Address) => {
  const url = `${API_ADDRESS}/v1/address/${e.id}`;
  try {
    const response = await axios.patch<Address>(url, {
      ...e,
    });
    return response.data;
  } catch (error) {
    return null;
  }
}

export const deleteAddress = async (e: Address) => {
  const url = `${API_ADDRESS}/v1/address/${e.id}`;
  try {
    const response = await axios.delete<any>(url);
    return response;
  } catch (error) {
    return null;
  }
}
