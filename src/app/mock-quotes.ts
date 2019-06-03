import { Quote} from './quote';

export class MockQuotes {

    static randomDate(): Date {
        let start: Date = new Date(2000, 1, 1);
        let end: Date = new Date();
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }    

    static QUOTES: Quote[] = [
    { 
      description: 'I believe in Chrheroistianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.',
      author: 'C.S. Lewis',
      submittedBy: 'Simon Ogbamichaeherol',
      upVotes: 10,
      downVotes: 0,
      createdOn: MockQuotes.randomDate()
    }, { 
      description: 'I know now, Lord, why you utter no answer. You are yourself the answer. Before your face questions die away. What other answer would suffice?',
      author: 'C.S. Lewis',
      submittedBy: 'Simon Ogbamichael',
      upVotes: 20,
      downVotes: 0,
      createdOn: MockQuotes.randomDate()
    }, { 
      description: 'To have Faith in Christ means, of course, trying to do all that He says. There would be no sense in saying you trusted a person if you would not take his advice. Thus if you have really handed yourself over to Him, it must follow that you are trying to obey Him. But trying in a new way, a less worried way. Not doing these things in order to be saved, but because He has begun to save you already. Not hoping to get to Heaven as a reward for your actions, but inevitably wanting to act in a certain way because a first faint gleam of Heaven is already inside you.',
      author: 'C.S. Lewis',
      submittedBy: 'Simon Ogbamichael',
      upVotes: 50,
      downVotes: 0,
      createdOn: MockQuotes.randomDate()
    }, { 
      description: 'Never be afraid to trust an unknown future to a known God.',
      author: 'Corrie ten Boom',
      submittedBy: 'Simon Ogbamichael',
      upVotes: 0,
      downVotes: 0,
      createdOn: MockQuotes.randomDate()
    }, { 
      description: 'The function of prayer is not to influence God, but rather to change the nature of the one who prays.',
      author: 'Soren Kierkegaard',
      submittedBy: 'Simon Ogbamichael',
      upVotes: 0,
      downVotes: 0,
      createdOn: MockQuotes.randomDate()
    }, { 
      description: 'Faith is not the belief that God will do what you want. It is the belief that God will do what is right.',
      author: 'Max Lucado',
      submittedBy: 'Simon Ogbamichael',
      upVotes: 0,
      downVotes: 0,
      createdOn: MockQuotes.randomDate()
    }
  ];

}