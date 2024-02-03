import { Button, Table } from "antd";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
export function UsersListPage() {
  const dataSource = [
    {
      key: "1",
      username: "Mike",
      email: "das@gmail.com",
      role: "realtor",
    },
    {
      key: "2",
      username: "dMike",
      email: "das@gmail.com",
      role: "realtor",
    },
    {
      key: "4",
      username: "moz",
      email: "das@gmail.com",
      role: "client",
    },
    {
      key: "3",
      username: "sMike",
      email: "das@gmail.com",
      role: "admin",
    },
  ];

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      render: (row: any) => {
        return (
          <>
            <span
              style={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "20px",
                display: "inline-block",
                padding: "5px 10px",
              }}
            >
              {row.role}
            </span>
          </>
        );
      },
    },
    {
      title: "Actions",
      render: (row: any) => {
        return (
          <>
            <FaEdit size={20} />
            <MdDelete size={20} color="red" />
          </>
        );
      },
    },
  ];
  return (
    <div className="p-4">
      <h1 className="m-4">Users</h1>
      <div>
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </div>
  );
}
