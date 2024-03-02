export default function CirleText() {
  const cirleText = "Transparent Reliable Secure";
  return (
    <div className="text d-center">
      <p className="fs-six">
        {" "}
        {cirleText.split("").map((char, i) => (
          <span
            className=" "
            key={i}
            style={{ transform: `rotate(${i * 12}deg)` }}
          >
            {char}
          </span>
        ))}
      </p>
    </div>
  );
}
