import { _decorator, Component} from "cc";
const { ccclass } = _decorator;

@ccclass("CameraCtl")
export class CameraCtl extends Component {
    private angle : number = 0;
    private speed : number = 5;

    update (deltaTime: number) {
        this.angle += deltaTime * this.speed;
        this.node.setRotationFromEuler( 0, this.angle, 0);
    }
}
