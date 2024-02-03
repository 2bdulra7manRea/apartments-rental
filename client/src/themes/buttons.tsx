import { Button } from "antd";

export const PrimaryButton = ({
  onClick,
  children,
}: {
  children: any;
  onClick?: (e: any) => void;
}) => {
  return (
    <>
      <Button
        style={{
          // backgroundColor: "black",
          // color: "white",
          // outline: "none",
          // display: "block",
          // border: "none",
          width: "100%",
        }}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
};
