import React, { useState, useEffect} from "react";
import axios from "axios";
import Pagination from "./components/Pagination/Pagination";
import Post from "./components/Posts/Post";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPost, setFilteredPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setFilteredPost(response.data);
    } catch (err) {
      console.log(err);
      throw new Error("something went wrong");
    }
  }, []);

  const searchPost = (e) => {
    setCurrentPage(1);
    setFilteredPost(() =>
      posts.filter((post) => post.title.indexOf(e.target.value) > -1)
    );
  };

  return (
    <>
      <div className="header">
        <div style={{ marginLeft: "1rem" }}>
          <h1>Posts</h1>
        </div>
        <div class="wrap">
          <div class="search">
            <input type="text" class="searchTerm" placeholder="What are you looking for?" onChange={searchPost} />
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>

        <>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            data={filteredPost}
            RenderComponent={Post}
            title="Posts"
            pageLimit={5}
            dataLimit={10}
          />
        </>
    </>
  );
}

export default App;
