import React, { useMemo, useState, useEffect } from "react";
import { Column } from "react-table";
import Table from "../components/Table";
import { getAddresses, Address } from "../services/addresses";

const Addresses = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);

  const columns = useMemo<Column<Address>[]>(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Address 1",
        accessor: "address1",
      },
      {
        Header: "Address 2",
        accessor: "address2",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Zip Code",
        accessor: "zip",
      },
    ],
    []
  );

  const fetchData = async () => {
    const res = await getAddresses();
    setAddresses(res);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <Table columns={columns} data={addresses} />
    </div>
  );
};

export default Addresses;
