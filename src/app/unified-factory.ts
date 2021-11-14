import * as unified from "unified";
import * as markdown from "remark-parse";
import { customParser } from "./custom-parser";

export function unifiedFactory() {
  return unified()
    .use(markdown)
    .use(customParser)
    .freeze();
}
