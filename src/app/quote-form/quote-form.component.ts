import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Input() addQuoteStatus: boolean = false;

  @Output() quoteAdded = new EventEmitter<Quote>();

  @Input() quote: Quote;

  constructor() { }

  ngOnInit() {
    //this.onReset();
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
    this.addQuoteStatus = false;
  }
}
