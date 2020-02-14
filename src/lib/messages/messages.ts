export interface BaseMessage {
    name: string,
}

export interface IPlatformMessage extends BaseMessage {
    name: "platformMessage",
    x: number,
    y: number,
    w: number,
    h: number,
}

export const isPlatformMessage = (target: any): target is IPlatformMessage => target?.name === "platformMessage"
