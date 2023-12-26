"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import Modal from "./Modal";

const formSchema = z.object({
  Name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  Email: z.string().email({
    message: "Invalid Email",
  }),
  Message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(160, {
      message: "Message must not be longer than 30 characters.",
    }),
});
type Form = z.infer<typeof formSchema>;

export function ContactForm() {
  const [open, setOpen] = useState(false);
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Email: "",
      Message: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (data: Form) => {
    try {
      const response = await fetch("https://formspree.io/xdorqjoa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle success
        form.reset();
        setOpen(true);
      } else {
        // Handle error
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };
  const onerror = (errors: FieldErrors<Form>) => {
    console.log(errors);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Modal open={open} setOpen={setOpen} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onerror)}
          className="space-y-4 w-full lg:w-3/6"
          method="POST"
          action={"https://formspree.io/f/xdorqjoa"}
        >
          <FormField
            control={form.control}
            name="Name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="leading-7 [&:not(:first-child)]:mt-6">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Name"
                    className=" placeholder:text-text-200/40"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="leading-7 [&:not(:first-child)]:mt-6">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    className=" placeholder:text-text-200/40"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="leading-7 [&:not(:first-child)]:mt-6">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    className="resize-none  placeholder:text-text-200/40"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size={"lg"}
            className=" w-full"
            disabled={
              !form.formState.isDirty ||
              !form.formState.isValid ||
              form.formState.isSubmitting
            }
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
