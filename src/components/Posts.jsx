import { useDispatch, useSelector } from "react-redux";
import getposts from "../utils/getPosts";
import { lazy } from "react";

let Card;

const Posts = () => {
  const posts = useSelector((state) => state.getPosts.posts);
  const error = useSelector((state) => state.getPosts.error);
  const pending = useSelector((state) => state.getPosts.pending);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className={`${posts && posts.length > 0 && "hidden"}`}
        onClick={() => {
          Card = lazy(() => import("./Card"));
          return dispatch(getposts());
        }}
      >
        {pending ? "Loading..." : "Show All Posts"}
      </button>
      <div className="flex flex-col gap-2 p-2">
        {pending ? (
          <h1 className="text-blue-500">Loading...</h1>
        ) : (
          (posts &&
            posts.length > 0 &&
            posts.map((post) => <Card key={post.id} {...post} />)) ||
          (error && <p className="text-red-600">Error: {error}</p>)
        )}
      </div>
    </div>
  );
};

export default Posts;
