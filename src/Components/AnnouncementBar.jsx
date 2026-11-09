export default function AnnouncementBar({
  message = "Free Delivery for orders over EGP 2,000",
}) {
  return (
    <div className="bg-[#235240] h-7 text-white text-[10px] flex items-center overflow-hidden whitespace-nowrap">
      <div className="flex w-max animate-marquee">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="px-8">
            {message}
            <span className="mx-8">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
