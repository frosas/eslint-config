/**
 * @type {(dirname: string) => Linter.Config}
 * @param {string | undefined} dirname
 */
export const buildGitIgnoreConfig: (dirname: string) => Linter.Config;
declare const _default: import("eslint/config").Config[];
export default _default;
export { globals };
import type { Linter } from "eslint";
import globals from "globals";
