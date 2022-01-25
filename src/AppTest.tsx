import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";

export const AppTest = ({ ...props }: Props) => {
  const [data, setData] = useState();
  useEffect(() => apiCall(setData), []);
  return (
    <div>
      <Table columns={AppTest.getColumns()} dataSource={data} />
    </div>
  );
};

interface Props extends React.HTMLAttributes<HTMLElement> {}

const apiCall = (setData: React.Dispatch<React.SetStateAction<undefined>>) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => setData(res?.data))
    .catch(function (error) {
      console.log(error);
    });
};

AppTest.getColumns = () => {
  return [
    {
      title: "ID",
      dataIndex: "id",
      key: "name",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "name",
    },
  ];
};
