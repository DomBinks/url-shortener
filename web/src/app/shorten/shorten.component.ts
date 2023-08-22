import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shorten',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.css']
})
export class ShortenComponent {
  url:string = ''; // Stores the URL submitted by the user

  submitURL() {
    console.log(this.url); // Log the URL to the console

    const data = {url: this.url}; // Put the URL in a JSON

    // Send a POST request with the JSON to the Go backend
    // (Have to subscribe for the POST request to be sent)
    this.http.post<any>('/shorten', data).subscribe();

    // Navigate to the page to display the shortened link
    this.router.navigate(['/shortened']);
  }

  constructor(private http: HttpClient, private router: Router) {}
}
