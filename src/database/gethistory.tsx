export const getHistory = (callback) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM places ORDER BY timestamp DESC;', [], (_, results) => {
      let data = [];
      for (let i = 0; i < results.rows.length; i++) {
        data.push(results.rows.item(i));
      }
      callback(data);
    });
  });
};