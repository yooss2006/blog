import { readdirSync } from "fs";
import path from "path";

type BlogPostStructureTYpe = {
  structure: Record<string, any>;
  nextPath: string;
};

export function getBlogPostStructure(param?: BlogPostStructureTYpe) {
  const rootPath = param
    ? param.nextPath
    : path.join(process.cwd(), "blog-post");
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
        fileStructure[file.name] = getBlogPostStructure({
          structure: {},
          nextPath: path.join(rootPath, file.name),
        });
      } else if (file.name.includes(".md")) {
        fileStructure[file.name.slice(0, -3)] = file.name;
      }
    });

  return fileStructure;
}
