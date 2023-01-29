import { ReplaceVariable } from "@crowbartools/firebot-custom-scripts-types/types/modules/replace-variable-manager";
import { isRecording } from "../obs-remote";

export const IsRecordingVariable: ReplaceVariable = {
  definition: {
    handle: "obsIsRecording",
    description:
      "Returns 'true' if OBS is currently recording or 'false' if it is not.",
    possibleDataOutput: ["text"],
  },
  evaluator: async () => {
    const recordState = await isRecording();
    return recordState ?? false;
  },
};
