import { Form, InputNumber, Modal } from "antd";
import { Controller, useForm } from "react-hook-form";

function FilterApartmentModel({
  onCancel,
  isModalOpen,
  getFilter,
}: {
  getFilter: (filter: any) => void;
  onCancel: () => void;
  isModalOpen: boolean;
}) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      price_per_month: 0,
      floor_area_size: 0,
      number_of_rooms: 0,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data, "ddd");
    getFilter(data);
    onCancel();
  };

  return (
    <>
      <Modal
        title="Filter Apartments"
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
              </Form.Item>
            )}
            name="number_of_rooms"
          />
        </Form>
      </Modal>
    </>
  );
}

export default FilterApartmentModel;
