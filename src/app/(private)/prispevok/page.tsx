//src/app/(private)/prispevok/page.tsx

import PostsView from "@/sections/PostsView";

export const metadata = { title: 'Príspevky | ZoskaSnap' };

async function PostListing() {
  return <PostsView />;
}

export default PostListing;
