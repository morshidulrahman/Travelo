import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { UserAuth } from "../context/AuthProvider";

const MyList = () => {
  const { user } = useContext(UserAuth);
  const [mylist, setmylist] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(`http://localhost:5000/travels/${user.email}`);
      const data = await res.json();
      setmylist(data);
      setloading(false);
    };
    fetchdata();
  });

  return (
    <div>
      <h1 className="text-3xl font-extrabold capitalize text-center py-5 dark:text-white">
        my list
      </h1>
      <div className="container mx-auto px-4 py-10">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Tourist spot Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Seasonality
                </th>
                <th scope="col" className="px-6 py-3">
                  Cost
                </th>
                <th scope="col" className="px-6 py-3 pl-10">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {mylist.map((item) => (
                <tr
                  key={item._id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.tourists_spot_name}
                  </th>
                  <td className="px-6 py-4">{item.travel_time} days</td>
                  <td className="px-6 py-4">{item.seasonality}</td>
                  <td className="px-6 py-4">${item.average_cost}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <Link
                      to="/"
                      className="font-medium bg-orange-600 text-white rounded-md
                    px-3 py-2"
                    >
                      <FaEdit size={20} />
                    </Link>
                    <Link
                      to="/"
                      className="font-medium bg-red-600 text-white rounded-md
                    px-3 py-2"
                    >
                      <MdDelete size={20} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyList;
