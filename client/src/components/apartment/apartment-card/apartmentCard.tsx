import { Button, Divider } from "antd";
import { useState } from "react";
import { IApartment } from "../../../common/types";
import DeleteApartmentModel from "../../models/deleteAppartmentModel";

const pd =
  "https://res.cloudinary.com/homelike/image/upload/w_1900,c_fit,f_auto/homelike-05/uploads/4b4f6f4888bc12223a9e6b31320b9e0e2024d56001f32edf974e813baf3d12d1.jpeg?q=auto";

export function ApartmentCard({ item }: { item: IApartment }) {
  const [openDeleteModel, setOpenDeleteModel] = useState(false);

  const {
    name,
    description,
    price_per_month,
    number_of_rooms,
    floor_area_size,
    status,
    id,
  } = item;

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
        <img width={"100%"} height={"100%"} src={pd} />
      </div>

      <div className="p-4">
        <h3>{name}</h3>
        <div className="mt-8">
          <div
            className="flex justify-between items-center"
            style={{ width: "60%" }}
          >
            <div>
              <span className="font-bold">{floor_area_size}</span>
              <span className="unit ml-1">
                ft<sup>2</sup>
              </span>
            </div>
            <div>
              <span className="font-bold">{number_of_rooms}</span>
              <span className="unit ml-1">rooms</span>
            </div>
          </div>
          <Divider />

          <div className="flex justify-between">
            <div>
              {status ? (
                <span className="text-green-500">Available</span>
              ) : (
                <span className="text-red-500">Rented</span>
              )}
            </div>
            <div>
              <span className="font-bold"> &#163;{price_per_month}</span>
              <span className="unit ml-1">/month</span>{" "}
            </div>
          </div>
        </div>
      </div>
      {openDeleteModel ? (
        <DeleteApartmentModel
          currentRowId={id}
          title="Delete Apartment"
          onCancel={() => {
            setOpenDeleteModel(false);
          }}
          isModalOpen={openDeleteModel}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
