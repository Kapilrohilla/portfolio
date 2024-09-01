export interface CardP {
  children: React.ReactNode;
  className?: string;
  id?: string;
}
const Card = ({ children, className, id }: CardP) => {
  return (
    <div
      className={`flex flex-col h-full w-full py-10 bg-white px-7 leading-5 ${className} md:py-16`}
      id={id}
    >
      {children}
    </div>
  );
};

export default Card;
