import * as unified from "unified";
import * as markdown from "remark-parse";

export function unifiedFactory() {
  return unified()
    .use(markdown)
    .freeze();
}
