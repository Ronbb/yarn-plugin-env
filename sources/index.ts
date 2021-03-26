import { Hooks, Plugin } from "@yarnpkg/core";
import { config } from "dotenv";

const plugin: Plugin<Hooks> = {
  hooks: {
    setupScriptEnvironment: async (_, env) => {
      const { parsed, error } = config();
      if (error) {
        return
      }
      if (parsed) {
        Object.keys(parsed).forEach((key) => {
          if (!env[key]) {
            const value = parsed[key];
            env[key] = value;
          }
        });
      }
    },
  },
};

export default plugin;
