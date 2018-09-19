import 'reflect-metadata';
import { createConnection, getRepository } from 'typeorm';
import { A } from './entity/A';
import { B } from './entity/B';

createConnection()
  .then(async (connection) => {
    const aRepo = getRepository(A);
    const bRepo = getRepository(B);

    console.log('Inserting a new user into the database...');
    const a = new A();
    a.name = 'something';

    console.log(a);
    await aRepo.save(a);

    const b = new B();
    b.name = 'something';

    b.a = Promise.resolve(a);

    console.log(b);
    await bRepo.save(b);

    const as2 = await aRepo.findOne();
    console.log('Loaded A: ', as2);

    console.log('Loaded B: ', await as2.b);
  })
  .catch((error) => console.log(error));
