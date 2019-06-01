import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  selectedQuote: Quote;

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
    
    var count=quote.upVotes;
    var sum=count+1;
    quote.upVotes=sum;

  }

  incrementDownVotes(quote:Quote):void{

    var count=quote.downVotes;
    var sum=count+1;
    quote.downVotes=sum;
    
  }

  quotes: Quote[] = [
    { 
      description: 'I believe in Chrheroistianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.',
      author: 'C.S. Lewis',
      submittedBy: 'Simon Ogbamichaeherol',
      upVotes: 123495,
      downVotes: 1239
    }, { 
      description: 'I know now, Lord, why you utter no answer. You are yourself the answer. Before your face questions die away. What other answer would suffice?',
      author: 'C.S. Lewis',
      submittedBy: 'Simon Ogbamichael',
      upVotes: 500420,
      downVotes: 230
    }, { 
      description: 'To have Faith in Christ means, of course, trying to do all that He says. There would be no sense in saying you trusted a person if you would not take his advice. Thus if you have really handed yourself over to Him, it must follow that you are trying to obey Him. But trying in a new way, a less worried way. Not doing these things in order to be saved, but because He has begun to save you already. Not hoping to get to Heaven as a reward for your actions, but inevitably wanting to act in a certain way because a first faint gleam of Heaven is already inside you.',
      author: 'C.S. Lewis',
      submittedBy: 'Simon Ogbamichael',
      upVotes: 130200,
      downVotes: 12
    }, { 
      description: 'Never be afraid to trust an unknown future to a known God.',
      author: 'Corrie ten Boom',
      submittedBy: 'Simon Ogbamichael',
      upVotes: 287492,
      downVotes: 2974
    }, { 
      description: 'The function of prayer is not to influence God, but rather to change the nature of the one who prays.',
      author: 'Soren Kierkegaard',
      submittedBy: 'Simon Ogbamichael',
      upVotes: 93854,
      downVotes: 304
    }, { 
      description: 'Faith is not the belief that God will do what you want. It is the belief that God will do what is right.',
      author: 'Max Lucado',
      submittedBy: 'Simon Ogbamichael',
      upVotes: 384682,
      downVotes: 109
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
