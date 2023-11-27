import { readdirSync } from "fs";
import { readFile } from "fs/promises";
import path from "path";

type BlogPostStructureTYpe = {
  structure: Record<string, any>;
  nextPath: string;
};

export function getBlogStructure(param?: BlogPostStructureTYpe) {
  const rootPath = param
    ? param.nextPath
    : path.join(process.cwd(), "public", "blog-post");
  const files = readdirSync(rootPath, { withFileTypes: true });
  const fileStructure: Record<string, any> = param ? param.structure : {};

  files
    .filter((file) => file.isDirectory() || file.name.includes(".md"))
    .sort((a, b) => {
      if (
        (a.isDirectory() && b.isDirectory()) ||
        (!a.isDirectory() && !b.isDirectory())
      )
        return a.name.localeCompare(b.name);
      return a.isDirectory() ? -1 : 1;
    })
    .forEach((file) => {
      if (file.isDirectory()) {
        fileStructure[file.name] = getBlogStructure({
          structure: {},
          nextPath: path.join(rootPath, file.name),
        });
      } else if (file.name.includes(".md")) {
        fileStructure[file.name.slice(0, -3)] = file.name;
      }
    });

  return fileStructure;
}

export async function getThumbnailPath(
  pathSet: string[],
  extension: string = ".jpg"
): Promise<string> {
  return `/blog-post/${pathSet.join("/")}/thumbnail${extension}`;
}

export async function getPostMarkdown(pathSet: string[]): Promise<any> {
  const filePath = path.join(
    process.cwd(),
    "public",
    "blog-post",
    ...pathSet,
    "post.md"
  );
  const content = await readFile(filePath, "utf-8");
  return content;
}

export function getHeaderContent(data: string): Array<string> {
  const regex = /\"(.*?)\"/g;
  const matchs: Array<string> = [];
  let match;
  while ((match = regex.exec(data))) {
    if (match[1]) matchs.push(match[1]);
  }
  if (matchs.length !== 3 && matchs.find((match) => !match))
    throw new Error("마크다운 파일의 헤더가 잘못되었습니다.");
  return matchs;
}
