"use client";
import React from "react";
import { z } from "zod";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { ArrowBigRightDash } from "lucide-react";
import { toast } from "sonner";
type MsgFormP = {
  className?: string;
};
const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string().min(10),
});
const MessageForm = ({ className }: MsgFormP) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  return (
    <div className={`flex flex-col gap-7 ${className}`}>
      <Form {...form}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  placeholder="Name"
                  {...field}
                  className={`h-[50px] w-full border border-gray-300 rounded-[10px] px-4 outline-none placehoder-gray-300 ${poppins.className} font-light focus:text-primary_green text-sm`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  placeholder="Email address"
                  {...field}
                  className={`h-[50px] w-full border border-gray-300 rounded-[10px] px-4 outline-none placehoder-gray-300 ${poppins.className} font-light focus:text-primary_green text-sm`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <textarea
                  placeholder="Email address"
                  {...field}
                  className={`h-[120px] py-4 w-full border border-gray-300 rounded-[10px] px-4 outline-none placehoder-gray-300 ${poppins.className} font-light focus:text-primary_green text-sm`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className={`bg-[#eee] text-black text-sm ${poppins.className} h-[50px] uppercase w-fit min-w-52 gap-2 rounded-full active:bg-[#eee] active:text-primary_green focus:bg-[#eee]`}
          onClick={() => {
            const id = toast("Message Sent", {
              description: `At, ${new Date().toDateString()}`,
              duration: 2000,
            });
            console.log(id);
          }}
        >
          Send Message
          <ArrowBigRightDash strokeWidth={1.5} />
        </Button>
      </Form>
    </div>
  );
};

export default MessageForm;
