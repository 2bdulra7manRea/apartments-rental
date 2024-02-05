import { Button, Table } from "antd";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useFetchUsers } from "../../api/users.api";
import { useState } from "react";
import DeleteUserModel from "../../components/models/deleteUserModel";
import CreateUserModel from "../../components/models/createUserModel";
import HeaderList from "../../components/header/headerList";
export function UsersListPage() {
  const { data, isLoading, isSuccess } = useFetchUsers();
  const [userDeleteModel, setUserDeleteModel] = useState(false);
  const [currentClickedRow, setCurrentClickedRow] = useState<string>("");
  const [openForm, setOpenForm] = useState(false);
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
            <Button type="text">
              <FaEdit size={20} />
            </Button>
            <Button
              type="text"
              onClick={() => {
                setUserDeleteModel(true);
                setCurrentClickedRow(row.id);
              }}
            >
              <MdDelete size={20} color="red" />
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <>
      <HeaderList
        titleButton="Add new user"
        onClick={() => setOpenForm(true)}
      />

      <div className="p-4">
        <h1 className="m-4">Users</h1>
        <div>
          <Table
            dataSource={isSuccess ? data?.data : []}
            loading={isLoading}
            columns={columns}
          />
        </div>
        {
          <DeleteUserModel
            currentRowId={currentClickedRow}
            title="Delete User"
            onCancel={() => {
              setUserDeleteModel(false);
            }}
            isModalOpen={userDeleteModel}
          />
        }
      </div>

      {openForm && (
        <CreateUserModel
          onCancel={() => {
            setOpenForm(false);
          }}
          isModalOpen={openForm}
        />
      )}
    </>
  );
}
