import { Button } from "antd";
import { ApartmentCard } from "../../components/apartment/apartment-card/apartmentCard";
import ApartmentForm from "../../components/apartment/apartment-form/apartmentForm";
import { useState } from "react";
import GoogleMapContainer from "../../components/google-map/googleMapContainer";
import FilterApartmentModel from "../../components/filter-items/filterApartments";
import { BsFillFilterSquareFill } from "react-icons/bs";
import { useFetchApartments } from "../../api/apartment.api";
import { IApartment } from "../../common/types";
import HeaderList from "../../components/header/headerList";
export function ApartmentListPage() {
  const [openForm, setOpenForm] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const { data, isSuccess } = useFetchApartments();

  return (
    <>
      <HeaderList
        titleButton="Add new Apartment"
        onClick={() => setOpenForm(true)}
      />

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
            {isSuccess ? (
              data?.data.map((item: IApartment) => {
                return <ApartmentCard item={item} />;
              })
            ) : (
              <>No Apartments Found</>
            )}
          </div>
        </div>

        <div style={{ width: "25%" }}>
          <GoogleMapContainer />
        </div>
      </div>

      {openForm && (
        <ApartmentForm
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
