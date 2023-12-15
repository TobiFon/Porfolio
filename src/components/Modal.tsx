import { CheckCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction } from "react";

interface OpenProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const Modal = ({ open, setOpen }: OpenProps) => {
  return (
    <div>
      {open && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-bg- bg-opacity-20 z-[99999]">
          <div className=" w-80 lg:w-[40rem] p-10 bg-bg-300 text-text-100 text-center">
            <h3 className=" justify-center items-center scroll-m-20 text-2xl font-semibold tracking-tight flex gap-3 mb-1 text-primary-100">
              {" "}
              <CheckCheck className=" stroke-primary-100 w-10 h-20 " />
              Message Sent
            </h3>
            <div>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Thanks for reaching out
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                I will get back to you asap
              </p>
            </div>
            <Button size={"sm"} onClick={() => setOpen(false)}>
              Back
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
