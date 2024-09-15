export interface CardP {
  children: React.ReactNode;
  className?: string;
  id?: string;
}
const Card = ({ children, className, id }: CardP) => {
  return (
    <div
      className={`flex flex-col h-full w-full py-10 bg-background px-7 leading-5 md:py-16 ${className} `}
      id={id}
      style={{
        backgroundImage:
          "linear-gradient(120deg,rgba(255,255,255,.08),rgba(255,255,255,0)) !important",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
