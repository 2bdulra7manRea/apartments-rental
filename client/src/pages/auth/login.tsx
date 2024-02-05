import { Form, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../themes/buttons";
import { useUserAccount } from "../../hooks/useAccount";
import { useLoginAccountMutation } from "../../api/auth.api";
import { useNotificationApp } from "../../components/notification/notification";
import { memo } from "react";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string(),
  })
  .required();

function LoginPage() {
  const { handleOnLogin } = useUserAccount();
  const { contextHolder, openNotification } = useNotificationApp();
  const { mutate } = useLoginAccountMutation({
    onSuccess: (data) => {
      if (data.data.access_token) {
        handleOnLogin(data.data);
        openNotification("Successfully logged in ", "success");
      }
    },
    onError(error, variables, context) {
      openNotification(`unable to logged in, ${error.message}`, "error");
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const prepareFormData = (data: any) => {
    return {
      email: data.email,
      password: data.password,
    };
  };

  const onSubmit = (data: any) => {
    const formData = prepareFormData(data);
    mutate(formData);
  };

  return (
    <>
      <div
        className="flex justify-center items-center"
        style={{ backgroundColor: "white", height: "70vh" }}
      >
        {contextHolder}
        <div style={{ width: "30%" }}>
          <h1>Sign Up</h1>
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
                Sign Up
              </PrimaryButton>

              <div className="p-4 pl-0">
                <p style={{ display: "inline-block" }} className="mr-2">
                  {" "}
                  Don't have an account ?
                </p>
                <Link to={"/register"}>Create an account</Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default memo(LoginPage);
