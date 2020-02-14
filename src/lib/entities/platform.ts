import { IEntity } from "@hattmo/coreengine"
import { IBasicEntityState, IPhysicsState } from "../states/states"
import { ICollideableMessage } from "../messages/messages";

type IPlatformState = IBasicEntityState & IPhysicsState;

export default (x: number, y: number, w: number, h: number, dx: number = 0, dy: number = 0): IEntity<IPlatformState> => {
    return [{ name: "platform", x, y, w, h, dx, dy }, ({ state, send }) => {
        const platformMessage: ICollideableMessage = {
            ...state,
            name: "collideableMessage",
        }
        send(platformMessage);
        return {
            ...state,
            x: state.x + state.dx,
            y: state.y + state.dy
        }
    }];
}

export const isPlatform = (target: any): target is IPlatformState => target?.name === "platform"
