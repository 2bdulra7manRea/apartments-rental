import { Button } from "antd";
import { useState } from "react";

const pd =
  "https://res.cloudinary.com/homelike/image/upload/w_1900,c_fit,f_auto/homelike-05/uploads/4b4f6f4888bc12223a9e6b31320b9e0e2024d56001f32edf974e813baf3d12d1.jpeg?q=auto";

export function ApartmentCard() {
  const [view, setView] = useState("INFO");

  function displayView(viewState: string) {
    switch (viewState) {
      case "MAP":
        return <>map</>;

      case "INFO":
        return (
          <>
            <img width={"100%"} height={"100%"} src={pd} />
          </>
        );

      case "DETAILS":
        return <>details</>;

      default:
        return <></>;
    }
  }

  return (
    <div
      style={{
        width: "280px",
        margin: "14px",
        height: "370px",
        backgroundColor: "white",
      }}
    >
      <div
        className="apartment-img"
        style={{ width: "100%", height: "50%", backgroundColor: "gray" }}
      >
        {displayView(view)}
      </div>

      <div className="p-4">
        <h3>Wilmslow Road, Manchester</h3>
        <div className="mt-8">
          <Button
            onClick={() => {
              setView("INFO");
            }}
          >
            Info
          </Button>
          <Button
            onClick={() => {
              setView("MAP");
            }}
          >
            Map
          </Button>
          <Button
            onClick={() => {
              setView("DETAILS");
            }}
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
}
