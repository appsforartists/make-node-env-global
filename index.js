module.exports = function makeNodeEnvGlobal (fallback) {
  fallback = fallback || "local";

  global.NODE_ENV = global.NODE_ENV || process.env["NODE_ENV"] || console.warn(`Environment Variable NODE_ENV not found; defaulting to ${ fallback }`) || fallback;

  return global.NODE_ENV;
};
