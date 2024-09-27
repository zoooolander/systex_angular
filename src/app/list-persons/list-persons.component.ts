import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-persons',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './list-persons.component.html',
  styleUrl: './list-persons.component.css',
})
export class ListPersonsComponent implements OnInit {
  persons: Person[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let baseUrl = 'http://localhost:8080/eBiz/api/persons';
    this.http.get<PersonResponse>(baseUrl).subscribe({
      //subscribe(): 註冊callback函式
      next: (data) => {
        this.persons = data._embedded.persons;
      },
      error: (error) => {
        console.error('loading persons data error due to ', error);
      },
      complete: () => {
        this.persons.forEach((person) => {
          let href = person._links.self.href;
          let index = href.lastIndexOf('/'); //正斜線的位置
          person.id = href.substring(index + 1); //取正斜線後位置的數字，才是id
        });
      },
    });
  }
}

/**
 * define how to catch the return type(?)
 */
interface PersonResponse {
  _embedded: {
    persons: Person[];
    _links: {
      self: { href: string };
      profile: { href: string };
    };
  };
}
