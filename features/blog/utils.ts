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

export async function getHeaderContent(
  pathSet: Array<string>
): Promise<Record<string, string>> {
  const data = await getPostMarkdown(pathSet).then(
    (res) => res.split("---")[0]
  );
  const resultObject: Record<string, string> = {};

  const regex = /(\w+):\s*["']?([^"'\n]+)["']?/g;
  let match;

  while ((match = regex.exec(data)) !== null) {
    const key = match[1] as string;
    const value = match[2] as string;
    if (key && value) resultObject[key] = value;
  }

  return resultObject;
}

export async function getPostContent(pathSet: Array<string>) {
  return await getPostMarkdown(pathSet).then((res) => res.split("---")[1]);
}
