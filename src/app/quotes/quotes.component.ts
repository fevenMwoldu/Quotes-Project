import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
import { MockQuotes } from '../mock-quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = MockQuotes.QUOTES;

  selectedQuote: Quote;
  maxUpVotes = 0

  onSelect(quote: Quote): void {
    this.selectedQuote = quote;
  }

  onDelete(quote: Quote): void {
    const index = this.quotes.indexOf(quote, 0);
    if(index > -1){
      this.quotes.splice(index, 1);      
    }
  }  
  
  incrementUpVotes(quote:Quote):void{
    quote.upVotes += 1;
    if(quote.upVotes > this.maxUpVotes){
      this.maxUpVotes = quote.upVotes;
    }
  }

  incrementDownVotes(quote:Quote):void{
    quote.downVotes += 1;
  }

  onQuoteAdded(quote: Quote){
    this.quotes.push(quote);
  }
  


  constructor() { }

  ngOnInit() {    
    this.calcMaxUpVote();
  }

  calcMaxUpVote(): void {
    this.maxUpVotes = Math.max(...this.quotes.map(q => q.upVotes));
  }
}
