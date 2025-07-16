import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase({ name: 'history.db' });

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, lat REAL, lng REAL, timestamp TEXT);'
    );
  });
};
export const savePlace = (name, lat, lng) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO places (name, lat, lng, timestamp) VALUES (?, ?, ?, ?);',
      [name, lat, lng, new Date().toISOString()]
    );
  });
};