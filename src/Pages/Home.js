import { useEffect, useState } from "react";
import CustomizedTable from "../Components/CustomizedTable";
import Header from "../Components/Header";

export default function Home() {
  const [initialData, setInitialData] = useState();
  const [tableData, setTableData] = useState([]);

  const COLUMNS = [
    {
      id: 0,
      title: "#",
      accessor: "id",
    },
    {
      id: 1,
      title: "Name",
      accessor: "name",
    },
    {
      id: 2,
      title: "User Name",
      accessor: "username",
    },
    {
      id: 3,
      title: "Email",
      accessor: "email",
    },
    {
      id: 4,
      title: "Phone",
      accessor: "phone",
    },
  ];

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => {
        setTableData(res);
        setInitialData(res);
      });
  };

  const handleSearch = (e) => {
    const { value } = e.target;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value) {
      if (emailRegex.test(value)) {
        setTableData(searchByEmail(value));
      } else {
        setTableData(searchByName(value));
      }
    } else {
      setTableData(initialData);
    }
  };

  const searchByEmail = (email) => {
    return initialData.filter((user) =>
      user.email.toLowerCase().includes(email.toLowerCase())
    );
  };

  const searchByName = (name) => {
    return initialData.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  return (
    <>
      <Header onSearchInput={handleSearch} />
      <div
        style={{
          width: "96%",
          marginLeft: "2%",
        }}
      >
        <CustomizedTable Data={tableData} Columns={COLUMNS} />
      </div>
    </>
  );
}
