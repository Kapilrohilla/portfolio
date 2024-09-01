export interface CardP {
  children: React.ReactNode;
  className?: string;
}
const Card = ({ children, className }: CardP) => {
  return (
    <div
      className={`flex flex-col h-full w-full py-10 bg-white px-7 leading-5 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
