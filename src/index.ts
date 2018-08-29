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
    const aCreated = aRepo.create(a);
    await aRepo.save(aCreated);
    
    const as = await aRepo.find();
    console.log("Loaded A: ", as);

    const b = new B();
    b.name = "something";
    const bCreated = bRepo.create(b);
    bCreated.a = as[0];
    await bRepo.save(bCreated);
    
    const as2 = await aRepo.find();
    console.log("Loaded A: ", as2);
    
}).catch(error => console.log(error));
