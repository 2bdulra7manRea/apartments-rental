import { Alert, Modal } from "antd";
import { useDeleteUserMutation } from "../../api/users.api";
import { useQueryClient } from "react-query";
import { useNotificationApp } from "../notification/notification";

function DeleteUserModel({
  onCancel,
  isModalOpen,
  title,
  currentRowId,
}: {
  title: string;
  onCancel: () => void;
  isModalOpen: boolean;
  currentRowId: string;
}) {
  const queryClient = useQueryClient();
  const { openNotification, contextHolder } = useNotificationApp();

  const { mutate } = useDeleteUserMutation({
    onSuccess: () => {
      openNotification("Deleted user successfully", "success");
      onCancel();
      queryClient.invalidateQueries("get-users");
    },
    onError: () => {
      openNotification("Failed to deleted the user!", "error");
    },
  });

  const handleDelete = () => {
    mutate(currentRowId);
  };

  return (
    <>
      <Modal
        title={title}
        style={{ height: 300 }}
        open={isModalOpen}
        onOk={handleDelete}
        onCancel={onCancel}
      >
        <Alert
          type="error"
          description="Are you sure to delete the user?"
        ></Alert>
      </Modal>
      {contextHolder}
    </>
  );
}

export default DeleteUserModel;
