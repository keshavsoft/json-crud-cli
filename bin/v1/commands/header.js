import { locateSource } from "./header/steps/locateSource.js";
import { createProject } from "./header/steps/createProject.js";
import { announce } from "./header/steps/announce.js";

export default ({ folderName = "", isAnnounce = true }) => {
    const resolvedFolderName = folderName;

    const source = locateSource();

    createProject({ source, destination: process.cwd() });

    if (isAnnounce) announce({ inResolvedFolderName: resolvedFolderName });
};