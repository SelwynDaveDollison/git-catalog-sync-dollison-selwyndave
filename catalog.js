function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  let fee = Math.floor(daysLate * ratePerDay);
  return Math.min(fee, 20);
}

module.exports = { isValidLoan, calculateLateFee };