# Web Dev Final Project

## Props To Do

- [x] Header Peter
- [] User Dropdown Peter (Will do with Styling later on (Requires Bootstrap))
- [x] Footer Peter
- [x] Search Bar Peter
- [x] Login Peter
- [] Main Page Dashboard Willen
- [] Main Page Stocks Carousel Willen (Will do with Styling later on (Requires Bootstrap))
- [x] Stock Info Willen
- [x] Stock Table Willen
- [x] Stock List Willen
- [x] Buy/Sell Stock Willen
- [x] User Table Willen
- [] Logout Screen Peter

## Pages To Do
 - [] Home Page (Not Logged In) Willen
 - [x] Login Peter
 - [x] Logout Peter
 - [] Stock Info Screen Willen
 - [x] Stock User Screen Willen

## Endpoints To Do
 - GET /api/stocks/ (gets all stocks)
 - GET /api/userStocks/ (set stocks for current user)
 - POST /api/user/ (make a user)
 - GET /api/user/ (gets stocks for a user)
 - DELETE /api/user/?stock={name} (gets rid of a stock from user list)
 - POST /api/stock/{stockName} (updates stock value for current user, gets data from main stocks collection, gets it from online every 15 min)
 - POST /api/stock (adds a new stock to track, also adds it to the main collection if it doesn't exist yet)
 - POST /api/transaction, makes a new transaction, type == buy or sell in body, also includes stock symbol and user 