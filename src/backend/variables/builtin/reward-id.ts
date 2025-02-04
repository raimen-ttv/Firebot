import { EffectTrigger } from "../../../shared/effect-constants";
import { OutputDataType, VariableCategory } from "../../../shared/variable-constants";

const triggers = {};
triggers[EffectTrigger.EVENT] = ["twitch:channel-reward-redemption"];
triggers[EffectTrigger.CHANNEL_REWARD] = true;
triggers[EffectTrigger.PRESET_LIST] = true;
triggers[EffectTrigger.MANUAL] = true;

const model = {
    definition: {
        handle: "rewardId",
        description: "The ID of the channel reward",
        triggers: triggers,
        categories: [VariableCategory.COMMON, VariableCategory.TRIGGER],
        possibleDataOutput: [OutputDataType.TEXT]
    },
    evaluator: (trigger) => {
        return trigger.metadata.eventData ?
            trigger.metadata.eventData.rewardId :
            trigger.metadata.rewardId;
    }
};

module.exports = model;