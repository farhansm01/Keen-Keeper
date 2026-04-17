import { useEffect, useState } from "react";
import Banner from "../component/Banner";
import FriendCard from "../component/FriendCard";

const Home = () => {
  const [friends, setFriends] = useState(null);

  useEffect(() => {
    fetch("/data/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  if (!friends) {
    return (
      <div className="bg-[#F8FAFC] min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-[#244D3F] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] pb-20">
      <Banner />
      <h2 className="text-center text-[#244D3F] text-3xl mb-4 font-semibold">
        Your Friends
      </h2>
      <div className="max-w-7xl mx-4 lg:mx-auto gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Home;
