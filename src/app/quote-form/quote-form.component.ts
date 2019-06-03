import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output() quoteAdded = new EventEmitter<Quote>();

  quote: Quote;

  constructor() { }

  ngOnInit() {
    this.onReset();
  }  

  addQuote(){
    this.quoteAdded.emit(this.quote);
    this.onReset();
  }

  onReset(){
    this.quote = {
      description: '',
      author: '',
      submittedBy: '',
      upVotes: 0,
      downVotes: 0,
      createdOn: new Date()
    };
  }
}
