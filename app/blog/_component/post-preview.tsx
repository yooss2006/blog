import React from "react";
import { getPostContent } from "../../../services/utils";
import MarkdownPreviewer from "./markdow-previewer";

type Props = {
  href: string;
};

export default async function PostPreview({ href }: Props) {
  const pathSet = href.substring(6).split("/");
  const post = await getPostContent(pathSet);

  return (
    <div className="w-[300px] h-[300px] p-2 overflow-auto scrollbar-hide absolute top-7 left-[50%] translate-x-[-50%] z-20 dark:bg-slate-600">
      <MarkdownPreviewer content={post} />
    </div>
  );
}
