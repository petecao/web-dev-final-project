"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const serviceAccount = require('../service-account.json');
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
});
const db = firebase_admin_1.default.firestore();
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, '../frontend/build')));
const port = 8080;
app.use(express_1.default.json());
const stocksCollection = db.collection('stocks');
const usersCollection = db.collection('users');
// get all stocks
app.get('/stocks', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const stocks = yield stocksCollection.orderBy('name').get();
    res.json(stocks.docs.map((doc) => {
        const stock = doc.data();
        return Object.assign(Object.assign({}, stock), { id: doc.id });
    }));
}));
// get all stocks for a user given user id
app.get('/userStocks/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = req.params.userId;
    const stocks = yield usersCollection.doc(user_id).collection('stocks').get();
    res.json(stocks.docs.map((doc) => {
        const stock = doc.data();
        return Object.assign(Object.assign({}, stock), { id: doc.id });
    }));
}));
// make a user
app.post('/createUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // admin.auth().verifyIdToken(req.headers.idtoken as string)
    //   .then(async () => {
    //     const newUser: User = req.body;
    //     const addedUser = await usersCollection.add(newUser);
    //     res.send(addedUser.id);
    //   })
    //   .catch(() => res.send('auth error'));
    const newUser = req.body;
    const addedUser = yield usersCollection.add(newUser);
    res.send(addedUser.id);
}));
// add stocks to user
app.post('/addStock/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = req.params.userId;
    const newStock = req.body;
    const addedUser = yield usersCollection.add(newStock);
    yield usersCollection.doc(user_id).collection('stocks').add(newStock);
    res.send(addedUser.id);
}));
// delete a stock given user id and stock id
app.delete('/deleteStock/:userId/:stockId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = req.params.userId;
    const stock_id = req.params.stockId;
    yield usersCollection.doc(user_id).collection('stocks').doc(stock_id).delete();
    res.send('Stock deleted!');
}));
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`));
