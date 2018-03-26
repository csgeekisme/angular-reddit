import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article } from './article.model'; // this is a plain class, not an Angular component

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
	@HostBinding('attr.class') cssClass = 'row';
	@Input() article: Article;

  constructor() { }

  // Why 2 vote(), one in component, one in model?
  // Each does something different. vote() in component
  // relates to component view. Whereas, in model, it
  // defines what mutations happen in the model.
  //
  // This allows encapsulation in model. Don't want
  // model-specific code in component controller.
  //
  // Corresponding MVC guidline is Fat Models, Skinny
  // Controllers. Move most logic to models so that
  // components do the minimum work possible.
  voteUp(): boolean {
  	this.article.voteUp();
  	return false; // this prevents browser from propagating the event
  }

  voteDown(): boolean {
  	this.article.voteDown();
  	return false;
  }

  ngOnInit() {
  }

}
