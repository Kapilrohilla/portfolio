export interface ChildP {
  children?: React.ReactNode;
  className?: string;
}
const IconBtn = ({ children }: ChildP) => {
  return (
    <a className="h-[50px] w-[50px] border  flex items-center justify-center rounded-2xl">
      {children}
    </a>
  );
};

export default IconBtn;
