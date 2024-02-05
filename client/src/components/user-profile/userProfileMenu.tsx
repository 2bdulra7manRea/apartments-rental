import React, { memo } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Dropdown, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { PrimaryButton } from "../../themes/buttons";
import { useUserAccount } from "../../hooks/useAccount";

function UserProfile() {
  const { handleOnLogout } = useUserAccount();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <PrimaryButton onClick={handleOnLogout}>Logout</PrimaryButton>,
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }}>
        <div>
          <Avatar shape="square" size="large" icon={<UserOutlined />} />
          <span className="font-bold pl-4">
            {sessionStorage.getItem("username")
              ? sessionStorage.getItem("username")
              : "User"}
          </span>
        </div>
      </Dropdown>
    </>
  );
}

export default memo(UserProfile);
