"use client";

import * as z from "zod";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useUser } from "@/hooks/use-user";
import useAuthModal from "@/hooks/use-auth-modal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

type Props = {
  postPath: string;
};

const formSchema = z.object({
  comment: z.string().min(1, "댓글을 입력해주세요."),
});

export default function CommentForm({ postPath }: Props) {
  const { user } = useUser();
  const { onOpen } = useAuthModal();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!user) {
      return onOpen();
    }
    await supabase.from("comments").insert({
      post_id: postPath,
      parent_id: null,
      user_id: user.id,
      ...values,
    });
    form.reset();
    router.refresh();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex justify-between items-center gap-2"
      >
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Textarea {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-40 h-20">
          작성
        </Button>
      </form>
    </Form>
  );
}
