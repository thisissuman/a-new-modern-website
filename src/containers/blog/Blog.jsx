import React from "react";
import "./blog.css";
import { Article } from "../../components";
import {blog01,blog02,blog03,blog04,blog05} from './import'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening We are blogging about it
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA"><Article imgurl={blog01} date="Sep 26, 2023"></Article></div>
        <div className="gpt3__blog-container_groupB">
          <Article imgurl={blog02} date="Sep 26, 2023" title="AI is the future lets explore how it is"></Article>
          <Article imgurl={blog03} date="Sep 26, 2023" title="AI is the future lets explore how it is"></Article>
          <Article imgurl={blog04} date="Sep 26, 2023" title="AI is the future lets explore how it is"></Article>
          <Article imgurl={blog05} date="Sep 26, 2023" title="AI is the future lets explore how it is"></Article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
