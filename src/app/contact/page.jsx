import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

// Metadata
export const metadata = {
  title: "Contact Page",
  description: "Here you can contact us",
};

const Contact = () => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <h1 className="text-6xl mb-10">Lets Keep in Touch</h1>

      <div className="flex items-center justify-center gap-24">
        {/* image container */}
        <div className="flex-1 h-[400px]">
          <Image src="/contact.png" alt="contact" width={600} height={600} className={styles.image} />
        </div>

        {/* form container */}
          <form action="" className="flex-1 flex flex-col gap-5">
            <input type="text" placeholder="name" name="name" className=" px-6 py-4 outline-none text-[#bbb] border border-[#bbb] rounded-lg " />
            <input type="text" placeholder="email" name="email" className=" px-6 py-4 outline-none text-[#bbb] border border-[#bbb] rounded-lg " />
            <textarea placeholder="message" name="message" id="" className="resize-none h-36 w-full px-6 py-4 outline-none text-[#bbb] border border-[#bbb] rounded-lg " ></textarea>
            <Button title={"Send"} pad={"py-3 px-5"} url={"#"} />
          </form>
      </div>
    </div>
  );
};

export default Contact;
