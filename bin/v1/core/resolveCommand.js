import header from "../commands/header.js";

// resolveCommand.js
const map = {
    header
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};