import { IEntity, IterateFunction } from "@hattmo/coreengine";
import { IPhysicsState } from "../states/states";
import { isPlatformMessage } from "../messages/messages";
import collides from "../helpers/collides";

export interface IFallState {
    isFalling: boolean;
}

export default <T>(target: IEntity<T & IPhysicsState>): IEntity<T & IPhysicsState & IFallState> => {
    const gravity = 0.1;
    const [initialTargetState, initalTargetIterate] = target;
    const adjustedIterate: IterateFunction<T & IPhysicsState & IFallState> = (args) => {
        const { state: lastState, messages } = args;
        let isFalling = true;
        let platformHeight = 0;
        messages.filter(isPlatformMessage).forEach((message) => {
            if (collides(lastState, message)) {
                isFalling = false;
                platformHeight = message.y;
            }
        });
        const nextTargetState = initalTargetIterate(args);
        return {
            ...nextTargetState,
            isFalling,
            y: isFalling ? lastState.y + lastState.dy : platformHeight - nextTargetState.h,
            dy: isFalling ? lastState.dy + gravity : 0,
        };
    }
    return [{ ...initialTargetState, isFalling: false }, adjustedIterate];
}
