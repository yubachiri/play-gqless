/**
 * @type {import("@gqless/cli").GqlessConfig}
 */
import { GITHUB_TOKEN } from './src/.env.json'

const config = {
  endpoint: "/api/graphql",
  enumsAsStrings: false,
  react: true,
  scalars: { DateTime: "string" },
  preImport: "",
  introspection: {
    endpoint: "https://api.github.com/graphql",
    headers: {
      Authorization: `bearer ${GITHUB_TOKEN}`
    },
  },
  destination: "./src/gqless/index.ts",
  subscriptions: false,
  javascriptOutput: false,
};

module.exports = config;
