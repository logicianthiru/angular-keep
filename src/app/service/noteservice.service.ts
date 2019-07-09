import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../note';
import { Observable } from 'rxjs';

@Injectable(
)
export class NoteserviceService {

  note: Note;

  constructor(private httpclient: HttpClient) {

  }

  getNotes():Observable<Array<Note>> {
    return this.httpclient.get<Array<Note>>("http://localhost:3000/notes");
  }

  addNotes(note: Note): Observable<Note> {
    return this.httpclient.post<Note>("http://localhost:3000/notes",note);
  }
}
