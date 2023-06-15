import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "eYrbo7rex7kTK7jfgmqGEH",  // ID of a project you are using
      token: "VWs0I0w2H0pIm9ykD26xY3PkpR5WuTv41pIPP2eIxOJbwd2TzV06XYL3rMJ264RPCejQXaNF32J8W7yRig"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})