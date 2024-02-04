import { Alert, Modal } from "antd";
import { useQueryClient } from "react-query";
import { useNotificationApp } from "../notification/notification";
import { useDeleteApartmentMutation } from "../../api/apartment.api";

function DeleteApartmentModel({
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

  const { mutate } = useDeleteApartmentMutation({
    onSuccess: () => {
      openNotification("Deleted Apartment successfully", "success");
      onCancel();
      queryClient.invalidateQueries("get-apartments");
    },
    onError: () => {
      openNotification("Failed to deleted the Apartment!", "error");
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
          description="Are you sure to delete the Apartment?"
        ></Alert>
      </Modal>
      {contextHolder}
    </>
  );
}

export default DeleteApartmentModel;
