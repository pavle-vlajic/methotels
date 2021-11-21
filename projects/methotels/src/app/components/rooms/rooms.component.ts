import { Component, OnInit } from '@angular/core';
import { Room } from '../../models/room';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {

    // povezem ovaj niz rooms, sa nizom iz servisa, i da se pretplatim na njega
    this.roomService.getRooms().subscribe((rooms) => {

      this.rooms = rooms;
    });
  }

}
