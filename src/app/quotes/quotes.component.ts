import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
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

  randomDate(): Date {
    let start: Date = new Date(2000, 1, 1);
    let end: Date = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
  quotes: Quote[] = [
    { 
      description: 'I believe in Chrheroistianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.',
      author: 'C.S. Lewis',
      submittedBy: 'Simon Ogbamichaeherol',
      upVotes: 10,
      downVotes: 0,
      createdOn: this.randomDate()
    }, { 
      description: 'I know now, Lord, why you utter no answer. You are yourself the answer. Before your face questions die away. What other answer would suffice?',
      author: 'C.S. Lewis',
      submittedBy: 'Simon Ogbamichael',
      upVotes: 20,
      downVotes: 0,
      createdOn: this.randomDate()
    }, { 
      description: 'To have Faith in Christ means, of course, trying to do all that He says. There would be no sense in saying you trusted a person if you would not take his advice. Thus if you have really handed yourself over to Him, it must follow that you are trying to obey Him. But trying in a new way, a less worried way. Not doing these things in order to be saved, but because He has begun to save you already. Not hoping to get to Heaven as a reward for your actions, but inevitably wanting to act in a certain way because a first faint gleam of Heaven is already inside you.',
      author: 'C.S. Lewis',
      submittedBy: 'Simon Ogbamichael',
      upVotes: 50,
      downVotes: 0,
      createdOn: this.randomDate()
    }, { 
      description: 'Never be afraid to trust an unknown future to a known God.',
      author: 'Corrie ten Boom',
      submittedBy: 'Simon Ogbamichael',
      upVotes: 0,
      downVotes: 0,
      createdOn: this.randomDate()
    }, { 
      description: 'The function of prayer is not to influence God, but rather to change the nature of the one who prays.',
      author: 'Soren Kierkegaard',
      submittedBy: 'Simon Ogbamichael',
      upVotes: 0,
      downVotes: 0,
      createdOn: this.randomDate()
    }, { 
      description: 'Faith is not the belief that God will do what you want. It is the belief that God will do what is right.',
      author: 'Max Lucado',
      submittedBy: 'Simon Ogbamichael',
      upVotes: 0,
      downVotes: 0,
      createdOn: this.randomDate()
    }
  ];

  constructor() { }

  ngOnInit() {    
    this.calcMaxUpVote();
  }

  calcMaxUpVote(): void {
    this.maxUpVotes = Math.max(...this.quotes.map(q => q.upVotes));
  }
}
