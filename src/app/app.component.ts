import { Component } from '@angular/core';
import { Note } from './note';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { NoteserviceService } from './service/noteservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keep';
  note: Note = new Note();
  noteList: Array<Note> = [];

  constructor(private noteservice: NoteserviceService) {

  }

  ngOnInit() {

    this.noteservice.getNotes().subscribe(
      data => {
        this.noteList = data;
      }
    )

  }

  takeNotes() {

    this.noteservice.addNotes(this.note).subscribe(
      data => {
        this.noteList.push(data)
      }
    )

    this.note = new Note();

  }

}
