import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MylistCard = ({ item, setmylist, mylist }) => {
  const handledelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/travels/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              setmylist(mylist.filter((item) => item._id !== data._id));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
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
        <button
          onClick={handledelete}
          className="font-medium bg-red-600 text-white rounded-md
      px-3 py-2"
        >
          <MdDelete size={20} />
        </button>
      </td>
    </tr>
  );
};

export default MylistCard;
