import { IEntity } from "@hattmo/coreengine"
import { IBasicEntityState, IPhysicsState } from "../states/states"
import falls, { IFallState } from "../modifiers/falls"

type BadGuyState = IBasicEntityState & IPhysicsState & IFallState;

const badGuy = (x: number, y: number, w: number, h: number): IEntity<IBasicEntityState & IPhysicsState> => {
    return [{ entityName: "badGuy", x, y, w, h, dx: -0.2, dy: 0 }, ({ state }) => {
        return {
            ...state,
            x: state.x + state.dx,
        }
    }];
}
export const isBadGuy = (target: any): target is BadGuyState => target?.entityName === "badGuy"
export default (x: number, y: number, w: number, h: number) => {
    return falls(badGuy(x, y, w, h))
}
