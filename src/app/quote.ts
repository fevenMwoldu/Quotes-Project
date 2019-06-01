export class Quote {
    constructor(
        public description:string,
        public author:string,
        public submittedBy:string,
        public upVotes:number = 0,
        public downVotes:number = 0)
        {}
}
