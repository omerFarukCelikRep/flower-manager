import { faDownLong, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FlowerService from "../../../../services/FlowerService";
import FlowerCard from "../card/FlowerCard";

const FlowerList = () => {
  const [flowers, setFlowers] = useState([]);
  const [error, setError] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const getAllFlowers = async () => {
      const result = await FlowerService.getAllAsync();
      !result.isSuccess && setError(result.message);
      setFlowers(result.data);
      setFilteredList(result.data);
    };

    getAllFlowers();
  }, []);

  const search = (searchText) => {
    if (!searchText) {
      setFilteredList([...flowers]);
      return;
    }

    searchText = searchText.toLowerCase();
    setFilteredList(
      flowers.filter((selectedFlower) =>
        selectedFlower.name.toLowerCase().includes(searchText)
      )
    );
  };

  return (
    <>
      <div className="flower-list-container">
        <div className="flower-list-header">
          <div className="filters">
            <button type="button" className="link">
              Name{" "}
              <i>
                <FontAwesomeIcon icon={faUpLong} />
              </i>
            </button>
            <button type="button" className="link">
              Name{" "}
              <i>
                <FontAwesomeIcon icon={faDownLong} />
              </i>
            </button>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => search(e.target.value)}
            />
          </div>
          <div className="actions">
            <Link to="create" className="link">
              Create
            </Link>
          </div>
        </div>
        {error && <p>{error}</p>}
        <div className="flower-list">
          {filteredList.map((flower) => (
            <FlowerCard flower={flower} key={flower.id} />
          ))}
        </div>
      </div>
    </>
  );
};
//   if (searching) {
//     return (
//       <div className="flower-list-container">
//         <p className="create-product">
//           <Link to="create">
//             <span>Create Product</span>
//           </Link>
//         </p>
//         {flowers.map((flower) =>
//           flower.name
//             .toLowerCase()
//             .trim()
//             .startsWith(searching.toLowerCase().trim()) ? (
//             <FlowerCard flower={flower} key={flower.id} />
//           ) : null
//         )}
//       </div>
//     );
//   } else {
//     return (
//       <>
//         <div className="flower-list-container">
//           <div className="flower-list-header">
//             <div className="filters">
//               <button type="button" className="link">
//                 Name{" "}
//                 <i>
//                   <FontAwesomeIcon icon={faUpLong} />
//                 </i>
//               </button>
//               <button type="button" className="link">
//                 Name{" "}
//                 <i>
//                   <FontAwesomeIcon icon={faDownLong} />
//                 </i>
//               </button>
//             </div>
//             <div className="search">
//               <input type="search" placeholder="Search..." />
//             </div>
//             <div className="actions">
//               <Link to="create" className="link">
//                 Create
//               </Link>
//             </div>
//           </div>
//           {error && <p>{error}</p>}
//           <div className="flower-list">
//             {flowers.map((flower) => (
//               <FlowerCard flower={flower} key={flower.id} />
//             ))}
//           </div>
//         </div>
//       </>
//     );
//   }
// };

export default FlowerList;
