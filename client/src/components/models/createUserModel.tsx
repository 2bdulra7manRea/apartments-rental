import { Checkbox, CheckboxProps, Form, Input, Modal } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PrimaryButton } from "../../themes/buttons";
import { memo, useState } from "react";
import { ROLES_USERS } from "../../common/types";
import { useNotificationApp } from "../notification/notification";
import { useQueryClient } from "react-query";
import { useCreateUserMutation } from "../../api/users.api";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
    username: yup.string().required(),
  })
  .required();

function CreateUserModel({
  onCancel,
  isModalOpen,
}: {
  onCancel: () => void;
  isModalOpen: boolean;
}) {
  const { openNotification, contextHolder } = useNotificationApp();
  const queryClient = useQueryClient();

  const { mutate } = useCreateUserMutation({
    onSuccess() {
      queryClient.invalidateQueries(["get-users"]);
      openNotification("The user has been added successfully", "success");
      onCancel();
    },
    onError: () => {
      openNotification("Failed to user a new apartment", "error");
    },
  });

  const [isRealtor, setIsRealtor] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
    resolver: yupResolver(schema),
  });

  const prepareFormData = (data: any) => {
    return {
      email: data.email,
      username: data.username,
      password: data.password,
      role: isRealtor ? ROLES_USERS.REALTOR : ROLES_USERS.CLIENT,
    };
  };

  const onSubmit = (data: any) => {
    const formData = prepareFormData(data);
    mutate(formData);
  };

  const onChange: CheckboxProps["onChange"] = (e) => {
    setIsRealtor(e.target.checked);
  };

  return (
    <Modal
      title="Add New User"
      style={{ height: 500 }}
      open={isModalOpen}
      onOk={handleSubmit(onSubmit)}
      onCancel={onCancel}
    >
      <div
        className="flex justify-center items-center"
        style={{ backgroundColor: "white", height: "70vh" }}
      >
        <div style={{ width: "30%" }}>
          <Form>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Form.Item label="" className="mt-6 mb-6">
                  <Input
                    value={value}
                    placeholder="Username"
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  {errors.username && (
                    <span style={{ color: "red" }}>
                      The username is required.
                    </span>
                  )}
                </Form.Item>
              )}
              name="username"
            />

            <div className="mt-6 mb-6">
              <Checkbox value={isRealtor} onChange={onChange}>
                as Realtor
              </Checkbox>
            </div>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Form.Item label="" className="mt-6 mb-6">
                  <Input
                    value={value}
                    placeholder="E-email"
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>The Email is required.</span>
                  )}
                </Form.Item>
              )}
              name="email"
            />

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Form.Item label="" className="mt-6 mb-6">
                  <Input.Password
                    value={value}
                    placeholder="password"
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  {errors.password && (
                    <span style={{ color: "red" }}>
                      The Password is required.
                    </span>
                  )}
                </Form.Item>
              )}
              name="password"
            />

            <div>
              <PrimaryButton onClick={handleSubmit(onSubmit)}>
                Sign In
              </PrimaryButton>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

export default memo(CreateUserModel);
