import Head from "next/head";
import { Fragment } from "react";

import AllPost from "../../components/posts/all-post";
import { GetAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts"
        />
      </Head>
      <AllPost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = GetAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
