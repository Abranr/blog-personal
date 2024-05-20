import { itemBlogs } from "./component/ItemBlogs.js";
import { eliminarBlog } from "./helpers/eliminarBlog.js";

(() => {
  const contentItemBlogs = document.querySelector(".items_blog");
  itemBlogs(contentItemBlogs);
  eliminarBlog();
})();
