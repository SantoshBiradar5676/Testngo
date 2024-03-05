import { Ngo } from "./Ngo";
import { User } from "./User";

export class Donation{
    // donation_id:number;
    id:number;
    amount:number;
    orderId:string;
    status:string;
    
    ngo: Ngo = new Ngo();
    user:User=new User();

    constructor(){
        this.id=0;
        this.amount=0;
        this.orderId="";
        this.status="";

        
    }
}
