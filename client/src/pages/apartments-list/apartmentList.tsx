import { Button } from "antd";
import { ApartmentCard } from "../../components/apartment/apartment-card/apartmentCard";
import ApartmentForm from "../../components/apartment/apartment-form/apartmentForm";
import { useState } from "react";
import GoogleMapContainer from "../../components/google-map/googleMapContainer";
import FilterApartmentModel from "../../components/filter-items/filterApartments";
import { BsFillFilterSquareFill } from "react-icons/bs";
import { useFetchApartments } from "../../api/apartment.api";
import { FilterApartmentQuery, IApartment } from "../../common/types";
import HeaderList from "../../components/header/headerList";
import { useUserRole } from "../../hooks/useRole";
export function ApartmentListPage() {
  const [openForm, setOpenForm] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const { isClient } = useUserRole();
  const [filterData, setFilterData] = useState<FilterApartmentQuery>({
    take: 10,
  });
  const { data, isSuccess, isLoading } = useFetchApartments(filterData);

  const getFilterValues = (data: any) => {
    setFilterData({ ...filterData, ...data });
  };

  return (
    <>
      {!isClient() ? (
        <HeaderList
          titleButton="Add new Apartment"
          onClick={() => setOpenForm(true)}
        />
      ) : (
        <></>
      )}
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
              <BsFillFilterSquareFill size={25} />
            </Button>
          </div>

          <div className="flex flex-wrap">
            {isSuccess && !isLoading ? (
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
      <FilterApartmentModel
        getFilter={getFilterValues}
        isModalOpen={openFilter}
        onCancel={() => {
          setOpenFilter(false);
        }}
      />
    </>
  );
}
