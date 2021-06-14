module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  getTotal: function (unpaidHours) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    total = unpaidHours.reduce(reducer);
    return total;
  },

  numberWithCommas: function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
};
