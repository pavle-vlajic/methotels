import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../models/room';

@Pipe({
  name: 'filtersearch'
})
export class FiltersearchPipe implements PipeTransform {

  transform(rooms: Room[], title: string) {
console.log('asdadadsasadasd');

    if (!rooms) {
      return [];
    }

    if (!title) {
      return rooms;
    }

    return rooms.filter((room) => {
      console.log('asdsadsadasasdsdasdadsasadasdads');

      // return room.price <= title;
      return room.title.toLowerCase().includes(title.toLowerCase());
    })
  }

}
