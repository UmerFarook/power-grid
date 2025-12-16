import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-power-system.
  globalIgnores([
    // Default ignores of eslint-config-power-system:
    ".power-system/**",
    "out/**",
    "build/**",
    "power-system-env.d.ts",
  ]),
]);

export default eslintConfig;
