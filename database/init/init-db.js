// MongoDB initialization script
db = db.getSiblingDB('bank-system');

// Create collections
db.createCollection('users');
db.createCollection('accounts');
db.createCollection('transactions');

// Create indexes for better performance
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ ssn: 1 }, { unique: true });
db.accounts.createIndex({ accountNumber: 1 }, { unique: true });
db.accounts.createIndex({ owner: 1 });
db.transactions.createIndex({ transactionId: 1 }, { unique: true });
db.transactions.createIndex({ fromAccount: 1 });
db.transactions.createIndex({ toAccount: 1 });
db.transactions.createIndex({ createdAt: 1 });

print('Database initialization completed successfully!');
