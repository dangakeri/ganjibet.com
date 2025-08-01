import { fetchAPI } from "../utils/fetchApiRequest";
import BaseClass from "./BaseClass";

class PaymentService extends BaseClass {
  constructor() {
    super();
  }

  // Deposit cash to wallet
  async depositCash({ amount }) {
    const payload = {
      amount: +amount,
      phone: this.phone,
      userID: this.userId,
    };

    return await fetchAPI(
      "wallet/initial_deposit",
      "POST",
      payload,
      this.token
    );
  }

  // Get user wallet balance
  async updateBalance() {
    return await fetchAPI(
      "user/getCurrentUserWalletBalance",
      "POST",
      { userID: this.userId },
      this.token
    );
  }

  // Make a withdrawal
  async withdrawCash({ withdrawAmount, issueKey }) {
    const payload = {
      phone: this.phone,
      amount: withdrawAmount,
      userID: this.userId,
    };

    return await fetchAPI(
      `wallet/make_withdrawal/${issueKey}`,
      "POST",
      payload,
      this.token
    );
  }

  // Get all transaction history
  async transactionHistory() {
    return await fetchAPI(
      `wallet/getTransactions/${this.userId}`,
      "GET",
      null,
      this.token
    );
  }

  // Get status of a transaction using unique ID
  async getTransactionStatus(uniqueID) {
    return await fetchAPI(
      "wallet/getTranscationStatus",
      "POST",
      { uniqueID },
      this.token
    );
  }

  // Get withdrawal transaction status
  async getWithdrawalTransactionStatus(transactionID) {
    const response = await fetchAPI(
      "wallet/checkWithdrawalStatus",
      "POST",
      { transactionID },
      this.token
    );

    if (response?.status === 409) {
      throw new Error("Too many withdrawal requests. Please try later.");
    }

    return response;
  }

  // Get withdrawal transaction status using fetchAPI
  async getWithdrawalTransactionStatus(transactionID) {
    const result = await fetchAPI(
      "wallet/checkWithdrawalStatus",
      "POST",
      { transactionID },
      this.token
    );

    if (result?.status === 409) {
      throw new Error("Too many withdrawal requests. Please try later.");
    }

    return result;
  }

  // Create payment key
  async createPaymentKey() {
    return await fetchAPI("wallet/createIssueKey", "POST", null, this.token);
  }
}

export default PaymentService;
