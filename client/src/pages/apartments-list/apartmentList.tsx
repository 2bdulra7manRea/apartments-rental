import { Button } from "antd";
import { ApartmentCard } from "../../components/apartment/apartment-card/apartmentCard";
import ApartmentForm from "../../components/apartment/apartment-form/apartmentForm";
import { useState } from "react";
import GoogleMapContainer from "../../components/google-map/googleMapContainer";
import FilterApartmentMenu from "../../components/filter-items/filterApartments";
import FilterApartmentModel from "../../components/filter-items/filterApartments";
import { BsFillFilterSquareFill } from "react-icons/bs";
export function ApartmentListPage() {
  const [openForm, setOpenForm] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  function getFormDate(data: any) {
    setOpenForm(false);
    console.log(data);
  }

  return (
    <>
      <div style={{ backgroundColor: "white" }} className="p-4">
        {/* <Button
          onClick={() => {
            setOpenForm(true);
          }}
        >
          Add new Apartment
        </Button> */}
        {/* <FilterApartmentMenu /> */}
      </div>

      <div className="flex justify-between mt-4 mb-4 p-4">
        <div style={{ width: "71%" }}>
          <div className="mb-6 flex justify-between">
            <h2> Furnished Apartments for Rent</h2>
            <Button
              type="text"
              onClick={() => {
                setOpenFilter(true);
              }}
            >
              <BsFillFilterSquareFill size={20} color="red" />
            </Button>
          </div>

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

        <div style={{ width: "25%" }}>
          <GoogleMapContainer />
        </div>
      </div>

      {openForm && (
        <ApartmentForm
          submitData={getFormDate}
          onCancel={() => {
            setOpenForm(false);
          }}
          isModalOpen={openForm}
        />
      )}
      {openFilter && (
        <FilterApartmentModel
          getFilter={(data) => {
            console.log(data);
          }}
          isModalOpen={openFilter}
          onCancel={() => {
            setOpenFilter(false);
          }}
        />
      )}
    </>
  );
}
