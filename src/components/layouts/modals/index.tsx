"use client";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler, useRef } from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const overlay = useRef(null);
  const router = useRouter();

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.push("/");
    }
  };

  return (
    <div
      ref={overlay}
      className="fixed z-[999999] left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
      onClick={close}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default Modal;
