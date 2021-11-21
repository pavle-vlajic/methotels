import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  rooms: Room[];

  constructor() {

    this.rooms = [
      { id: 1, title: 'Room 1', imageUrl: 'assets/img/room.jpg', price: 10 },
      { id: 2, title: 'Room 2', imageUrl: 'assets/img/room.jpg', price: 20 },
      { id: 3, title: 'Room 3', imageUrl: 'assets/img/room.jpg', price: 30 },
    ]
  }

  getRooms(): Observable<Room[]> {
    this.rooms = [
      { id: 1, title: 'Room 1', imageUrl: 'assets/img/room.jpg', price: 10 },
      { id: 2, title: 'Room 2', imageUrl: 'assets/img/room.jpg', price: 20 },
      { id: 3, title: 'Room 3', imageUrl: 'assets/img/room.jpg', price: 30 },
    ]
    return of(this.rooms);
  }

  addRoom(room: Room) {
    this.rooms.push(room);
  }
}
