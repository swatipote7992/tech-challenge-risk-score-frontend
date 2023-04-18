import transactions from '../data/transactions'

const calculateRiskScore = (transactionHash): number => {
    const transactionData = transactions[transactionHash]

    if (!transactionData) {
        throw new Error('404 transaction not found')
    }

    return Math.random() * 10
}

export default calculateRiskScore;