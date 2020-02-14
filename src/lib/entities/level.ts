import { IEntity } from "@hattmo/coreengine";
import badGuy from "./badGuy";
import platform from "./platform";

const level = (): IEntity<{}> => {
    return [{}, ({ create, die }) => {
        create(badGuy(300, 13, 10, 20));
        create(badGuy(322, 12, 20, 23));
        create(badGuy(350, 10, 20, 34));
        create(badGuy(410, 10, 20, 20));
        create(badGuy(451, 10, 25, 24));
        create(platform(250, 250, 300, 20));
        create(platform(150, 350, 300, 20));
        die();
        return {};
    }]
}

export default level;
