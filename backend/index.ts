import admin from 'firebase-admin';
import express from 'express';
import cors from 'cors';
import path from 'path';

const serviceAccount = require('../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend/build')))
const port = 8080;
app.use(express.json());

type StockInfo = {
  name: string;
  price: number;
  favorite: boolean;
  num_shares: number;
}

type StockInfoWithID = StockInfo & {
  id: string;
};


type Stock = {
  name: string;
  price: number;
};

type StockWithID = Stock & {
  id: string;
};

type User = {
  name: string;
  stocks: StockInfoWithID[];
};

type UserWithID = User & {
  id: string;
};

const stocksCollection = db.collection('stocks');
const usersCollection = db.collection('users');


// get all stocks
app.get('/stocks', async (_, res) => {
  const stocks = await stocksCollection.orderBy('name').get();
  res.json(
    stocks.docs.map(
      (doc): StockWithID => {
        const stock = doc.data() as Stock;
        return { ...stock, id: doc.id };
      }
    )
  );
});


// get all stocks for a user given user id
app.get('/userStocks/:userId', async (req, res) => {
  const user_id = req.params.userId;
  const stocks = await stocksCollection.doc(user_id as string).collection('stocks').get();
  res.json(
    stocks.docs.map(
      (doc): StockInfoWithID => {
        const stock = doc.data() as StockInfo;
        return { ...stock, id: doc.id };
      }
    )
  );
});


// make a user
app.post('/createUser', async (req, res) => {
  admin.auth().verifyIdToken(req.headers.idtoken as string)
    .then(async () => {
      const newUser: User = req.body;
      const addedUser = await usersCollection.add(newUser);
      res.send(addedUser.id);
    })
    .catch(() => res.send('auth error'));
});


// delete a stock given user id and stock id
app.delete('/deleteStock/:userId/:stockId', async (req, res) => {
  const user_id = req.params.userId;
  const stock_id = req.params.stockId;
  await usersCollection.doc(user_id as string).collection('stocks').doc(stock_id as string).delete();
  res.send('Stock deleted!');
});






// app.get('/userStocks', async (_, res) => {
//   const users = await usersCollection.orderBy('name').get();
//   const stockslist = users.docs.map(
//     (doc) : UserWithID => doc.ref.collection('stocks').get()
//   )

//   const querySnapshotsArr = Promise.all(stockslist);

//   res.json(
//     querySnapshotsArr.forEach(querySnapshot => {
//       querySnapshot.docs.map(
//         (doc): StockInfoWithID => {
//           const stock = doc.data() as StockInfo;
//           return { ...stock, id: doc.id };
//         }
//       )
//     })
//   );
// }
//   user_list: Array<User>[];
//   user_list = users.docs.map(
//     (doc): UserWithID => {
//       const user = doc.data() as User;
//       return { ...user, id: doc.id };
//     }
//   )

//   res.json(

//         user.stocks.map(
//           (doc): StockInfoWithID => {
//             const stock = doc.data() as StockInfo;
//             return { ...stock, id: doc.id };
//           }
//         )
//       }
//     )
//   );
// });



app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port ${port}!`)
);