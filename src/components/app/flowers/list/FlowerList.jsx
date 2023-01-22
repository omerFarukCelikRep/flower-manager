import { faDownLong, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FlowerService from "../../../../services/FlowerService";
import FlowerCard from "../card/FlowerCard";
import { useAuthContext } from "../../../../context/AuthProvider";
import Loading from "../../../shared/loading/Loading";

const FlowerList = () => {
  const { auth } = useAuthContext();

  const [flowers, setFlowers] = useState([]);
  const [error, setError] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllFlowers = async () => {
      setLoading(true);
      const result = await FlowerService.getAllAsync();
      !result.isSuccess && setError(result.message);
      setFlowers(result.data);
      setFilteredList(result.data);
      setLoading(false);
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

  const sortByAsc = (prop) =>
    setFilteredList([
      ...flowers.sort((first, second) =>
        first[prop].localeCompare(second.name)
      ),
    ]);

  const sortByDesc = (prop) => {
    setFilteredList([
      ...flowers.sort((first, second) =>
        second[prop].localeCompare(first.name)
      ),
    ]);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flower-list-container">
          <div className="flower-list-header">
            <div className="filters">
              <button
                type="button"
                className="link"
                onClick={() => sortByAsc("name")}
              >
                Name{" "}
                <i>
                  <FontAwesomeIcon icon={faUpLong} />
                </i>
              </button>
              <button
                type="button"
                className="link"
                onClick={() => sortByDesc("name")}
              >
                Name{" "}
                <i>
                  <FontAwesomeIcon icon={faDownLong} />
                </i>
              </button>
              <button
                type="button"
                className="link"
                onClick={() => sortByAsc("price")}
              >
                Price{" "}
                <i>
                  <FontAwesomeIcon icon={faUpLong} />
                </i>
              </button>
              <button
                type="button"
                className="link"
                onClick={() => sortByDesc("price")}
              >
                Price{" "}
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

            {auth ? (
              <>
                <div className="actions">
                  <Link to="myFlowers" className="link">
                    MyFlowers
                  </Link>
                  <Link to="create" className="link">
                    Create
                  </Link>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          {error && <p>{error}</p>}
          <div className="flower-list">
            {filteredList.map((flower) => (
              <FlowerCard flower={flower} key={flower.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FlowerList;
