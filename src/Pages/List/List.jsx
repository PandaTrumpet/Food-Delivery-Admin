import { useEffect, useState } from "react";
import axios from "axios";
import "./List.css";
import { toast } from "react-toastify";
const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, {
        id: foodId,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        // Обновляем список без повторного запроса
        setList((prevList) => prevList.filter((item) => item._id !== foodId));
      } else {
        toast.error("Error!");
      }
    } catch (error) {
      toast.error("Error while removing food!");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.length > 0 &&
          list.map((item) => {
            return (
              <div key={item._id} className="list-table-format">
                <img src={`${url}/images/` + item.image} alt="Item image" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <p onClick={() => removeFood(item._id)} className="cursor">
                  x
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default List;
