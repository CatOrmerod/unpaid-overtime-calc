const Contributor = require('./Contributor');
const Entry = require('./Entry');
const Admin = require('./Admin');

Contributor.hasOne(Entry, {
    foreignKey: 'contributor_id',
    onDelete: 'CASCADE'
});
  
Entry.belongsTo(Contributor, {
    foreignKey: 'contributor_id'
});

// Admin.hasMany(Entry)
  
  module.exports = { Contributor, Admin, Entry };