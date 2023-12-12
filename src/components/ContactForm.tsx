"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Email: "",
      Message: "",
    },
  });

  const onSubmit = (data: Form) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full lg:w-3/6"
      >
        <FormField
          control={form.control}
          name="Name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="lg:text-xl">Name</FormLabel>
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
              <FormLabel className="lg:text-xl">Email</FormLabel>
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
              <FormLabel className="lg:text-xl">Message</FormLabel>
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
          className="lg:px-8 lg:py-6 lg:text-base rounded-md w-full"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
