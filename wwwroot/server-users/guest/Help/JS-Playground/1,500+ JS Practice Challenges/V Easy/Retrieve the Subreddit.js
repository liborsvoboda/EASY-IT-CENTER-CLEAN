/*
Retrieve the Subreddit
Create a function to extract the name of the subreddit from its URL.

Examples
subReddit("https://www.reddit.com/r/funny/") ➞ "funny"

subReddit("https://www.reddit.com/r/relationships/") ➞ "relationships"

subReddit("https://www.reddit.com/r/mildlyinteresting/") ➞ "mildlyinteresting"
Notes
N/A */







const subReddit = link => link.match(/\/r\/(\w+)/)[1];

const subReddit = (link) => link.split('/r/')[1].split('/')[0]

let subReddit = r => (r.match(/\/r\/([a-z]+)/i))[1]

const subReddit = url => url.split('/').splice(4, 1).join('');

const subReddit = link => link.slice(25, -1);