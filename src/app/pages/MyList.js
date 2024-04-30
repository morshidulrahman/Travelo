import React, { useContext, useEffect, useState } from "react";

import { UserAuth } from "../context/AuthProvider";

import MylistCard from "../components/mylist/MylistCard";
import Loader from "../components/loader/Loader";
import Helmets from "../utils/Helmet";

const MyList = () => {
  const { user } = useContext(UserAuth);
  const [mylist, setmylist] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(
        `https://travel-server-umber.vercel.app/mylist/${user.email}`
      );
      const data = await res.json();
      setmylist(data);
      setloading(false);
    };
    fetchdata();
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Helmets text="| MyList" />
      <h1 className="text-3xl font-extrabold capitalize text-center py-5 dark:text-white">
        my list
      </h1>

      <div className="container mx-auto px-5 py-10">
        {mylist.length == 0 ? (
          <h1 className="text-xl font-bold text-center py-10 dark:text-white capitalize">
            No tourists spot added
          </h1>
        ) : (
          <div
            className="relative overflow-x-auto shadow-md sm:rounded-lg  
          "
          >
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
                {mylist?.map((item) => (
                  <MylistCard
                    item={item}
                    mylist={mylist}
                    setmylist={setmylist}
                    key={item._id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;
