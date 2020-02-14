import { IEntity } from "@hattmo/coreengine";
import badGuy from "../entities/badGuy";
import platform from "../entities/platform";

const level = (): IEntity<{}> => {
    return [{}, ({ create, die }) => {
        create(badGuy(300, 50, 10, 20));
        create(platform(250, 250, 300, 20));
        create(platform(150, 350, 300, 20));
        create(platform(145, 250, 20, 200,0,-0.1));
        die();
        return {};
    }]
}

export default level;
