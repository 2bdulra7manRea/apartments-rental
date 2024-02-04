import { notification } from "antd";

export const useNotificationApp = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (
    text: string,
    type: "info" | "error" | "success"
  ) => {
    api.open({
      type,
      message: "Notification",
      description: text,
      placement: "topRight",
    });
  };

  return { openNotification, contextHolder };
};
