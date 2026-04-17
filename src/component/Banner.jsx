export default function Banner() {
  const stats = [
    { value: 10, label: "Total Friends" },
    { value: 3, label: "On Track" },
    { value: 6, label: "Need Attention" },
    { value: 12, label: "Interactions This Month" },
  ];

  return (
    <section className="bg-[#F8FAFC] px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center border-b-2 border-[#E9E9E9] pb-16">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Friends to keep close in your life
        </h1>

        {/* Subtext */}
        <p className="text-[#64748B] text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* CTA Button */}
        <button className="bg-[#244D3F] text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200 mb-12">
          + Add a Friend
        </button>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-[#E9E9E9] rounded-2xl px-6 py-6 flex flex-col items-center gap-2"
            >
              <span className="text-3xl sm:text-4xl font-bold text-[#244D3F]">
                {stat.value}
              </span>
              <span className="text-sm text-[#64748B] text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
