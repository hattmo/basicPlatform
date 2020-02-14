import { IEntity } from "@hattmo/coreengine"
import { IBasicEntityState, IPhysicsState } from "../states/states"
import rigidbody, { RigidBodyState } from "../modifiers/rigidBody"
import paceAI from "../modifiers/paceAI";

type BadGuyState = IBasicEntityState & IPhysicsState & RigidBodyState;

const badGuy = (x: number, y: number, w: number, h: number): IEntity<IBasicEntityState & IPhysicsState> => {
    return [{ name: "badGuy", x, y, w, h, dx: 0, dy: 0 }, ({ state }) => state];
}
export const isBadGuy = (target: any): target is BadGuyState => target?.name === "badGuy"
export default (x: number, y: number, w: number, h: number) => {
    return paceAI(-0.3)(
        rigidbody(0.1, 1)(
            badGuy(x, y, w, h)
        )
    )
}
