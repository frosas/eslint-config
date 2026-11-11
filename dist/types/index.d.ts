import globals from "globals";
import type { Linter } from "eslint";
/**
 * @type {(dirname: string) => Linter.Config}
 * @param {string | undefined} dirname
 */
export declare const buildGitIgnoreConfig: (dirname: string) => Linter.Config;
/** @type {Linter.Config[]} */
declare const config: Linter.Config[];
export default config;
export { globals, };
