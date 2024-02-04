import { Checkbox, CheckboxProps, Form, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../themes/buttons";
import { useRegisterAccountMutation } from "../../api/auth.api";
import { useUserAccount } from "../../hooks/useAccount";
import { useState } from "react";
import { ROLES_USERS } from "../../common/types";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
    username: yup.string().required(),
  })
  .required();

function RegisterPage() {
  const { handleOnLogin } = useUserAccount();
  const [isRealtor, setIsRealtor] = useState(false);
  const { mutate } = useRegisterAccountMutation({
    onSuccess: (data) => {
      if (data.data.access_token) {
        handleOnLogin(data.data);
      }
    },
    onError(error, variables, context) {
      console.log(error);
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
    <div
      className="flex justify-center items-center"
      style={{ backgroundColor: "white", height: "70vh" }}
    >
      <div style={{ width: "30%" }}>
        <h1>Create new account</h1>
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

            <div className="p-4 pl-0">
              <p style={{ display: "inline-block" }} className="mr-2">
                Do you have an account already ?
              </p>
              <Link to={"/login"}>Sign up</Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;
