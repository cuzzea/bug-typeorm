import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import {A} from "./entity/A";
import { B } from './entity/B';

createConnection().then(async connection => {

    const aRepo = getRepository(A);
    const bRepo = getRepository(B);

    console.log("Inserting a new user into the database...");
    const a = new A();
    a.name = "something";

    const b = new B();
    b.name = "something";
    
    a.b =  Promise.resolve(b);

    console.log(a);
    await aRepo.save(a);
    
    const as2 = await aRepo.find({relations: ['b']});
    console.log("Loaded A: ", as2);
    
}).catch(error => console.log(error));
