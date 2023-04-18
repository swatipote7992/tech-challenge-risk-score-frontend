import transactions from "../data/transactions";

const calculateRiskScore = (transactionHash): number => {
  const transactionData = transactions[transactionHash];

  // TODO - compute the correct risk score - this is obviously wrong!
  return Math.random() * 10;
};

export default calculateRiskScore;
