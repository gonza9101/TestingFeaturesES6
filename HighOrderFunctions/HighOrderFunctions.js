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

const mappedPosts = posts.map((post) =>
{
    return post.title;
});

console.log(mappedPosts);

const reducedPosts = posts.reduce((sum, post) =>
{
    return sum + post.id;
});

console.log(reducedPosts);