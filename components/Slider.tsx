export default function Slider({ texts, text_center = false }: SliderP) {
  return (
    <div className="overflow-hidden h-6 leading-6">
      <div
        className={`overflow-ellipsis flex flex-col animate-text-auto-scroll ${
          text_center ? "text-center" : ""
        }`}
      >
        {texts.map((text, index) => (
          <p
            className="font-light text-primary_green tracking-wide"
            key={index}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

type SliderP = {
  texts: String[];
  text_center?: boolean;
};
