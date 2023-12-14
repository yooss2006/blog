import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

type Props = {
  content: string;
};

export default function MarkdownPreviewer({ content }: Props) {
  return (
    <Markdown
      className={"prose text-[10px] max-w-none dark:prose-invert"}
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
        a: ({ href, ...rest }) => {
          if (!href) return null;
          return (
            <div className="break-words text-sky-700 dark:text-sky-400">
              {rest.children}
            </div>
          );
        },
        p: (props) => {
          const children: any = props?.node?.children[0];
          return children.tagName === "a" ? (
            <div {...props} />
          ) : (
            <p {...props} />
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
