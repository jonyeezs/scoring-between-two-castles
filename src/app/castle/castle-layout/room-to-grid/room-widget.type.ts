import { Room } from 'src/app/castle/rooms/room/room.type';
import { RoomToGridTransformer } from './room-to-grid-transformer/room-to-grid-transformer';
import { Widget, WidgetPosition } from '../models/WidgetPosition';


export class RoomWidget implements Widget {
    private location: WidgetPosition;

    constructor(private room: Room, transformer: RoomToGridTransformer) {
        this.location = transformer.getTransformer()(room);
    }
    public get position() {
      return {
        height: this.room.realEstate.height,
        width: this.room.realEstate.width,
        top: this.location.top,
        left: this.location.left
      };
    }
 }