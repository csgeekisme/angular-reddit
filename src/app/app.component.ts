import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
  	this.articles = [
  		new Article('Angular', 'http://angular.io', 3),
  		new Article('Fullstack', 'http://fullstack.io', 2),
  		new Article('Google', 'http://google.com')
  	];
  }

	// Create a new Article instance from submitted title and URL
	// Add it to array of Articles
	// Clear input field values
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
  	console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  	this.articles.push(new Article(title.value, link.value, 0));
  	title.value = '';
  	link.value = '';
  	return false;
  }

  sortedArticles(): Article[] {
  	// The => and sort() are built in functions from ES6
  	return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
