import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../components/loader/Loader";

const UpdateTourists = () => {
  const { id } = useParams();
  const [data, setdata] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    const fetchdata = async () => {
      const res = await fetch(
        `https://travel-server-umber.vercel.app/travels/${id}`
      );
      const data = await res.json();
      setdata(data);
      setloading(false);
    };
    fetchdata();
  }, []);

  const {
    seasonality,
    country_name,
    total_visitors_per_year,
    travel_time,
    average_cost,
    short_description,
    location,
    tourists_spot_name,
    image_url,
  } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const seasonality = form.seasonality.value;
    const country_name = form.coutry_name.value;
    const total_visitors_per_year = form.total_visit.value;
    const travel_time = form.time.value;
    const average_cost = form.avarge_cost.value;
    const short_description = form.description.value;
    const location = form.location.value;
    const tourists_spot_name = form.spot_name.value;
    const image_url = form.Photo_url.value;

    const updateInfo = {
      seasonality,
      country_name,
      total_visitors_per_year,
      travel_time,
      average_cost,
      short_description,
      location,
      tourists_spot_name,
      image_url,
    };

    fetch(`https://travel-server-umber.vercel.app/travels/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your data has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex justify-center items-center py-16">
      <div className="md:w-[70%] lg:w-[60%] w-[80%] rounded-md bg-gray-200 p-8">
        <h1 className="text-xl font-bold text-center py-5">
          Update Tourists spot
        </h1>
        <div>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex gap-5  md:flex-row flex-col">
              <div className=" w-full md:w-1/2">
                <label className="label block mb-1">Tourists spot Name</label>
                <input
                  defaultValue={tourists_spot_name}
                  name="spot_name"
                  type="text"
                  placeholder="name"
                  className="py-3 rounded-md px-3 w-full"
                  required
                />
              </div>
              <div className="  w-full md:w-1/2">
                <label className="label block mb-1">Seasonality</label>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  name="seasonality"
                  required
                  defaultValue={seasonality}
                >
                  <option value="Summer">Summer</option>
                  <option value="Winter">Winter</option>
                </select>
              </div>
            </div>
            <div className="flex gap-5  md:flex-row flex-col">
              <div className=" w-full md:w-1/2">
                <label className="label block mb-1">Avarage Cost</label>
                <input
                  name="avarge_cost"
                  type="number"
                  placeholder="name"
                  className="py-3 rounded-md px-3 w-full"
                  required
                  defaultValue={average_cost}
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="label block mb-1">Travel Time</label>
                <input
                  type="number"
                  name="time"
                  placeholder="Travel Time"
                  className="py-3 rounded-md px-3 w-full"
                  required
                  defaultValue={travel_time}
                />
              </div>
            </div>
            <div className="flex gap-5  md:flex-row flex-col">
              <div className=" w-full md:w-1/2">
                <label className="label block mb-1">Total Visit</label>
                <input
                  name="total_visit"
                  type="number"
                  placeholder="visit"
                  className="py-3 rounded-md px-3 w-full"
                  required
                  defaultValue={total_visitors_per_year}
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="label block mb-1">Photo Url</label>
                <input
                  type="text"
                  name="Photo_url"
                  placeholder="photo url"
                  className="py-3 rounded-md px-3 w-full"
                  required
                  defaultValue={image_url}
                />
              </div>
            </div>
            <div className="flex gap-5  md:flex-row flex-col">
              <div className="  w-full md:w-1/2">
                <label className="label block mb-1">Country Name</label>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  name="coutry_name"
                  required
                  defaultValue={country_name}
                >
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Cambodia">Cambodia</option>
                </select>
              </div>
              <div className=" w-full md:w-1/2">
                <label className=" block mb-1">Location</label>
                <input
                  name="location"
                  type="text"
                  placeholder="location"
                  className="py-3 rounded-md px-3 w-full"
                  required
                  defaultValue={location}
                />
              </div>
            </div>

            <div>
              <label className="label block mb-1">Short Description</label>
              <textarea
                name="description"
                placeholder="write a description"
                className="w-full h-[90px] p-4 rounded-md"
                defaultValue={short_description}
              ></textarea>
            </div>
            <div className=" mt-6">
              <button className="block w-full p-3 text-center rounded-lg text-white bg-[#F26f55] transition-all duration-300  hover:bg-transparent  border  border-[#F26f55] hover:text-[#F26f55]">
                update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTourists;
