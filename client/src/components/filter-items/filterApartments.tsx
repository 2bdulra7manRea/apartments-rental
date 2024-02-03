import { Button, Dropdown, Menu, Input, Slider } from "antd";

const FilterApartmentMenu = () => {
  const handleMenuClick = (e: any) => {
    console.log(`Clicked on range input ${e.key}`);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="input1">
        <Slider range step={10} defaultValue={[20, 50]} onChange={() => {}} />
      </Menu.Item>
      <Menu.Item key="input2">
        <Slider range step={10} defaultValue={[20, 50]} onChange={() => {}} />
      </Menu.Item>
      <Menu.Item key="input3">
        <Slider range step={10} defaultValue={[20, 50]} onChange={() => {}} />
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      menu={{}}
      placement="bottomLeft"
      trigger={["click"]}
      overlayStyle={{
        width: "500px",
      }}
    >
      <Button type="primary">
        Filter <span style={{ marginLeft: "5px" }}>&#9660;</span>
      </Button>
    </Dropdown>
  );
};

export default FilterApartmentMenu;
