import { Clock } from "lucide-react";

const posts = [
  {
    title: "Business meeting 2021 in San Francisco",
    date: "July 21, 2022",
    image: "/images/recent1.jpg",
  },
  {
    title: "Developing privacy user-centric apps",
    date: "July 21, 2022",
    image: "/images/recent2.jpg",
  },
  {
    title: "Starting and Growing Web Design in 2022",
    date: "July 21, 2022",
    image: "/images/recent3.jpg",
  },
];

const RecentPost = () => {
  return (
    <div >
      {/* TITLE */}
      <h2 className="text-2xl font-semibold mb-6">Recent Post</h2>

      {/* POSTS */}
      <div className="flex flex-col gap-5">
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex gap-4 bg-white p-4  shadow-sm"
          >
            {/* IMAGE */}
            <img
              src={post.image}
              alt={post.title}
              className="w-20 h-20 object-cover "
            />

            {/* CONTENT */}
            <div className="flex flex-col justify-between">
              <h3 className="font-semibold text-gray-900 leading-snug">
                {post.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                <Clock size={14} />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPost;
