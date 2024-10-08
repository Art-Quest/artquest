export type RecipientT = {
  name: string;
  publicKey: any;
  amountDonated: number;
  amountRequired: number;
  description: string;
  donationComplete: boolean;
};

export type QuestT = {
  address: string;
  title: string;
  description: string;
  deadline: number;
};

export type TransactionT = {
  transactionNo: number;
  time: Date;
  status: string;
  signature: string;
};

export type ProfileT = {
  name: string;
  username: string;
  email: string;
  bio: string;
  social: string[];
  referral: string[];
  xp: number;
};

export type TronDataSliceT = {
  walletAddress: string | null;
};
