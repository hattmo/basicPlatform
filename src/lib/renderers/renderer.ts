import { isPlatform } from "../entities/platform";
import { isBadGuy } from "../entities/badGuy";


export default (root: HTMLCanvasElement) => {
    const ctx = root.getContext("2d");
    if (ctx !== null) {
        const renderer = (states: any[]) => {
            ctx.clearRect(0, 0, root.width, root.height);
            ctx.fillStyle = "black";
            states.forEach((state) => {
                if (isPlatform(state)) {
                    const { x, y, w, h } = state;
                    ctx.fillRect(x, y, w, h);
                } else if (isBadGuy(state)) {
                    const { x, y, w, h } = state;
                    ctx.fillRect(x, y, w, h)
                }

            })
        }
        return renderer;
    } else {
        throw new Error("no render context");
    }
};
