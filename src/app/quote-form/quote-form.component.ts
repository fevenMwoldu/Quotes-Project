import { Component, OnInit} from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  addQuoteButtonStatus: boolean = false;

  quote: Quote = { 
    description: '',
    author: '',
    submittedBy: '',
    upVotes: 0,
    downVotes: 0
  };

  quotes: Quote[] = [
    { 
      description: 'I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.',
      author: 'C.S. Lewis',
      submittedBy: 'Simon Ogbamichael',
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

  addQuote(){
    this.quotes.push(this.quote);
    
    this.quote = { 
      description: '',
      author: '',
      submittedBy: '',
      upVotes: 0,
      downVotes: 0
    };
  }

  onSelect(quote: Quote){
    this.quote = quote;
    this.addQuoteButtonStatus = true;
  }

  onReset(){
    this.quote = { 
      description: '',
      author: '',
      submittedBy: '',
      upVotes: 0,
      downVotes: 0
    };

    this.addQuoteButtonStatus = false;
  }

  onDelete(quote: Quote){
    const index = this.quotes.indexOf(quote, 0);
    if(index > -1){
      this.quotes.splice(index, 1);
      
      this.onReset();
    }
  }

  constructor() { }
  

  ngOnInit() {
  }  
}
