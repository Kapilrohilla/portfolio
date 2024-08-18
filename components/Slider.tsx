export default function Slider({
  texts,
  text_center = false,
  textClass,
}: SliderP) {
  return (
    <div className="overflow-hidden h-6 leading-6">
      <div
        className={`overflow-ellipsis flex flex-col animate-text-auto-scroll ${
          text_center ? "text-center" : ""
        }`}
      >
        {texts.map((text, index) => (
          <p
            className={
              "font-extralight text-primary_green tracking-wide " + textClass
            }
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
  textClass?: string;
};
