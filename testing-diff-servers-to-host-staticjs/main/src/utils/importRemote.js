const loadRemote = (url, scope) =>
  new Promise((resolve, reject) => {
    __webpack_require__.l(
      url,
      (event) => {
        if (event?.type === "load") {
          return resolve();
        }
        const realSrc = event?.target?.src;
        const error = new Error();
        error.message = "Loading script failed.\n(missing: " + realSrc + ")";
        error.name = "ScriptExternalLoadError";
        reject(error);
      },
      scope,
    );
  });

const initSharing = async () => {
  if (!__webpack_share_scopes__?.default) {
    await __webpack_init_sharing__("default");
  }
};

// __initialized and __initializing flags prevent some concurrent re-initialization corner cases
const initContainer = async (containerScope) => {
  try {
    if (!containerScope.__initialized && !containerScope.__initializing) {
      containerScope.__initializing = true;
      await containerScope.init(__webpack_share_scopes__.default);
      containerScope.__initialized = true;
      delete containerScope.__initializing;
    }
  } catch (error) {
    console.error(error);
  }
};

/*
  Dynamically import a remote module using Webpack's loading mechanism:
  https://webpack.js.org/concepts/module-federation/
*/
export const importRemote = async ({
  url,
  scope,
  module,
  remoteEntryFileName = "remoteEntry.js",
}) => {
  if (!window[scope]) {
    // Load the remote and initialize the share scope if it's empty
    await Promise.all([
      loadRemote(`${url}/${remoteEntryFileName}`, scope),
      initSharing(),
    ]);
    if (!window[scope]) {
      throw new Error(
        `Remote loaded successfully, ${scope} doesn't exist in remote...`,
      );
    }
    const [, moduleFactory] = await Promise.all([
      initContainer(window[scope]),
      window[scope].get(module.startsWith("./") ? module : `./${module}`),
    ]);
    return moduleFactory();
  } else {
    const moduleFactory = await window[scope].get(
      module.startsWith("./") ? module : `./${module}`,
    );
    return moduleFactory();
  }
};
