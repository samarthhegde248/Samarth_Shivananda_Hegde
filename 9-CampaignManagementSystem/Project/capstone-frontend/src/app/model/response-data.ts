
export class SendingResponse{
    constructor(
        public question : string,
        public answer : string
    ){}
}

export class SaveResponse{
    constructor(
        public user:string,
        public submitdate: string,
        public form_title: string,
        public data: Array<SendingResponse> 
    ){}
}