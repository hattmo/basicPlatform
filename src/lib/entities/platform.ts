import { IEntity } from "@hattmo/coreengine"
import { IBasicEntityState, IPhysicsState } from "../states/states"
import { IPlatformMessage } from "../messages/messages";

type IPlatformState = IBasicEntityState & IPhysicsState;

export default (x: number, y: number, w: number, h: number): IEntity<IPlatformState> => {
    return [{ entityName: "platform", x, y, w, h, dx: 0, dy: 0 }, ({ state, send }) => {
        const platformMessage: IPlatformMessage = {
            ...state,
            name: "platformMessage",
        }
        send(platformMessage);
        return state
    }];
}

export const isPlatform = (target: any): target is IPlatformState => target?.entityName === "platform"
