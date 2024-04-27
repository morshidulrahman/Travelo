import React, { useContext, useEffect, useState } from "react";

import { UserAuth } from "../context/AuthProvider";

import MylistCard from "../components/mylist/MylistCard";

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
                <MylistCard item={item} mylist={mylist} setmylist={setmylist} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyList;
