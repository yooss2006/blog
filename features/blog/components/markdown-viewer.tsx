"use client";

import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

type Props = {
  content: string;
};

export default function MarkdownViewer({ content }: Props) {
  return (
    <Markdown
      className="prose max-w-none md:prose-lg lg:prose-xl dark:prose-invert"
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { children, className, node, ref, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              PreTag="div"
              language={match[1]}
              {...rest}
              style={materialDark}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} ref={ref} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className="w-full object-cover"
            src={image.src || ""}
            alt={image.alt || ""}
            width={1000}
            height={1000}
          />
        ),
      }}
    >
      {content}
    </Markdown>
  );
}
