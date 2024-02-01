import { Button } from "antd";
import { useState } from "react";

export function ApartmentCard() {
  const [view, setView] = useState("INFO");

  function displayView(viewState: string) {
    switch (viewState) {
      case "MAP":
        return <>map</>;

      case "INFO":
        return (
          <>
            <img
              width={"100%"}
              height={"100%"}
              src="https://housinganywhere.imgix.net/unit_type/1460609/34e018ea-37ce-47a9-a4f1-6b0c720546f1.jpg?ixlib=react-9.2.0&auto=format&fit=clip&cs=srgb&w=1446"
            />
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
        width: "350px",
        margin: "5px",
        height: "400px",
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
