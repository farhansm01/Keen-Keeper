import { Link } from "react-router-dom";

export default function FriendCard({ friend }) {
  const { name, picture, days_since_contact, tags, status } = friend;

  const statusStyle = {
    on_track: { bg: "#244D3F", text: "#FFFFFF", label: "On-Track" },
    almost_due: { bg: "#EFAD44", text: "#FFFFFF", label: "Almost Due" },
    overdue: { bg: "#EF4444", text: "#FFFFFF", label: "Overdue" },
  };

  const s = statusStyle[status] ?? statusStyle.on_track;

  return (
    <Link
      to={`/friend-details/${friend.id}`}
      className="bg-white border border-[#E9E9E9] rounded-2xl p-5 flex flex-col items-center text-center gap-2 hover:shadow-md transition-shadow duration-200  "
    >
      {/* Avatar */}
      <img
        src={picture}
        alt={name}
        className="w-20 h-20 rounded-full object-cover"
      />

      {/* Name */}
      <h3 className="text-gray-900 font-bold text-base mt-1">{name}</h3>

      {/* Days since contact */}
      <p className="text-[#64748B] text-xs">{days_since_contact}d ago</p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-[#CBFADB] text-[#244D3F]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status badge */}
      <span
        className="text-xs font-semibold px-3 py-1 rounded-full mt-1"
        style={{ backgroundColor: s.bg, color: s.text }}
      >
        {s.label}
      </span>
    </Link>
  );
}
