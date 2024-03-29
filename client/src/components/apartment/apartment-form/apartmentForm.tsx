import { Form, Input, InputNumber, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateApartmentMutation } from "../../../api/apartment.api";
import { IApartment } from "../../../common/types";
import { memo } from "react";
import { useQueryClient } from "react-query";
import { useNotificationApp } from "../../notification/notification";

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string(),
  price_per_month: yup.number().required(),
  floor_area_size: yup.number().required(),
  number_of_rooms: yup.number().required(),
});

function ApartmentForm({
  onCancel,
  isModalOpen,
}: {
  onCancel: () => void;
  isModalOpen: boolean;
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price_per_month: 0,
      floor_area_size: 0,
      number_of_rooms: 0,
    },
    resolver: yupResolver(schema),
  });

  const { openNotification, contextHolder } = useNotificationApp();
  const queryClient = useQueryClient();

  const { mutate } = useCreateApartmentMutation({
    onSuccess(data) {
      onCancel();
      queryClient.invalidateQueries(["get-apartments"]);
      openNotification("The apartment has been added successfully", "success");
    },
    onError: () => {
      openNotification("Failed to add a new apartment", "error");
    },
  });

  const prepareDataForm = (data: any): IApartment => {
    return {
      name: data.name,
      description: data.description,
      price_per_month: parseFloat(data.price_per_month),
      floor_area_size: parseFloat(data.floor_area_size),
      number_of_rooms: parseInt(data.number_of_rooms),
      coordinates: JSON.stringify([130.342, 32.3213]),
    };
  };

  const onSubmit = (data: any) => {
    const dataForm = prepareDataForm(data);
    if (Object.keys(dataForm).length === 0) {
      return;
    }
    mutate(dataForm);
  };

  return (
    <>
      <Modal
        title="Add New Apartment"
        style={{ height: 500 }}
        open={isModalOpen}
        onOk={handleSubmit(onSubmit)}
        onCancel={onCancel}
      >
        <Form layout="vertical">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Form.Item label="Name">
                <Input value={value} onChange={onChange} onBlur={onBlur} />
                {errors.name && (
                  <span style={{ color: "red" }}>The Name is required.</span>
                )}
              </Form.Item>
            )}
            name="name"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Form.Item label="Price per month">
                <InputNumber
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  prefix="¥"
                  addonBefore="+"
                  addonAfter={"$"}
                  defaultValue={100}
                />

                {errors.price_per_month && (
                  <span style={{ color: "red" }}>
                    The price per month is required.
                  </span>
                )}
              </Form.Item>
            )}
            name="price_per_month"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Form.Item label="floor area size">
                <InputNumber
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                {errors.floor_area_size && (
                  <span style={{ color: "red" }}>
                    The floor area size is required.
                  </span>
                )}
              </Form.Item>
            )}
            name="floor_area_size"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Form.Item label="number of rooms">
                <InputNumber
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                {errors.floor_area_size && (
                  <span style={{ color: "red" }}>
                    The number of rooms is required.
                  </span>
                )}
              </Form.Item>
            )}
            name="number_of_rooms"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Form.Item label="Description">
                <TextArea
                  rows={4}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                {errors.description && (
                  <span style={{ color: "red" }}>
                    The Description is required.
                  </span>
                )}
              </Form.Item>
            )}
            name="description"
          />
        </Form>
      </Modal>
      {contextHolder}
    </>
  );
}

export default memo(ApartmentForm);
