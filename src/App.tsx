import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";

export const App = ({ ...props }: Props) => {
  const [data, setData] = useState();
  useEffect(() => apiCall(setData), []);
  return (
    <div>
      <Table columns={App.getColumns()} dataSource={data} key="1"/>
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

App.getColumns = () => {
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
