import { posts } from "./posts.js";

posts.forEach((post) =>
{
    console.log(post);
}
);

const filteredPosts = posts.filter((post) =>
{
    return post.userId == 5;
});

console.log(filteredPosts);

