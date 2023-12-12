import { CheckCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "@formspree/react";

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
            <h3 className=" justify-center items-center text-xl lg:text-2xl font-semibold flex gap-3 mb-1 text-primary-100">
              {" "}
              <CheckCheck className=" stroke-primary-100 w-10 h-20 " />
              Message Sent
            </h3>
            <div>
              <p className="text-xl mb-2">Thanks for reaching out</p>
              <p className=" text-base">I will get back to you asap</p>
            </div>
            <Button
              className="lg:px-8 lg:py-6 lg:text-base rounded-md mt-6"
              onClick={() => setOpen(false)}
            >
              Back
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
