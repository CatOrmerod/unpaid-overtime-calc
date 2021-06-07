// Import models
const Entry = require('./Entry');
const Admin = require('./Admin');
//  Entry belongs to Admin
Entry.belongsTo(Admin, { 
    foreignKey: 'admin_id',
    onDelete: 'CASCADE',
});
// Admin can have multiple Entries
Admin.hasMany(Entry, { 
    foreignKey: 'admin_id',
    onDelete: 'CASCADE'
});

  module.exports = { Admin, Entry };