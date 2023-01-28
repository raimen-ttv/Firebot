import eventManager from "../EventManager";

export function triggerAnnouncement(
    userName: string,
    userDisplayName: string,
    twitchUserRoles: string[],
    messageText: string
): void {
    eventManager.triggerEvent("twitch", "announcement", {
        userIdName: userName,
        username: userDisplayName,
        twitchUserRoles,
        messageText
    });
};