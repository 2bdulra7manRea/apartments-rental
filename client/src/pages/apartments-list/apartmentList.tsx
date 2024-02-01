import { Button } from "antd";
import { ApartmentCard } from "../../components/apartment/apartment-card/apartmentCard";
import ApartmentForm from "../../components/apartment/apartment-form/apartmentForm";
import { useState } from "react";

export function ApartmentListPage() {
  const [openForm, setOpenForm] = useState(false);
  function getFormDate(data: any) {
    setOpenForm(false);
    console.log(data);
  }

  return (
    <>
      <div style={{ backgroundColor: "white" }} className="p-4 mt-5">
        <Button
          onClick={() => {
            setOpenForm(true);
          }}
        >
          Add new Apartment
        </Button>
      </div>
      <div style={{ width: "70%" }}>
        <h1 className="mt-4 mb-4 p-4"> Furnished Apartments for Rent</h1>
        <div className="flex flex-wrap">
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
        </div>
      </div>

      {openForm && (
        <ApartmentForm
          addEducation={getFormDate}
          onCancel={() => {
            setOpenForm(false);
          }}
          isModalOpen={openForm}
        />
      )}
    </>
  );
}
