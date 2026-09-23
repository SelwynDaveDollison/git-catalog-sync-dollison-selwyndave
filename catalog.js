function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  if (daysLate <= 1) return 0;
  let fee = Math.round(daysLate * ratePerDay);
  fee = Math.min(fee, 20);
  return Math.max(fee, 1);
}

module.exports = { isValidLoan, calculateLateFee };