export interface BaseMessage {
    name: string,
}

export interface ICollideableMessage extends BaseMessage {
    name: "collideableMessage",
    x: number,
    y: number,
    w: number,
    h: number,
    dx: number,
    dy: number
}

export const isCollideableMessage = (target: any): target is ICollideableMessage => target?.name === "collideableMessage"
