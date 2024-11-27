import { ClaimTopics, TokenClaimTopics } from "../types/types";

export const getClaimTopicName = (claimTopic: bigint): string => {
  if (claimTopic === BigInt(ClaimTopics.NAMES)) {
    return "Names";
  } else if (claimTopic === BigInt(ClaimTopics.KYC)) {
    return "KYC";
  } else if (claimTopic === BigInt(ClaimTopics.AML)) {
    return "AML";
  } else if (claimTopic === BigInt(ClaimTopics.COMPANY_IDENTITY)) {
    return "Company Identity";
  } else if (claimTopic === BigInt(ClaimTopics.TRADE_LISENCE)) {
    return "Trade lisence";
  } else if (claimTopic === BigInt(ClaimTopics.LETTER_OF_CREDIT)) {
    return "Letter of credit";
  } else if (claimTopic === BigInt(ClaimTopics.ASSAY_REPORT)) {
    return "Assay report";
  } else {
    return "None";
  }
};

export const getTokenClaimTopicName = (claimTopic: bigint): string => {
  if (claimTopic === BigInt(TokenClaimTopics.GOLD_PURITY)) {
    return "Gold purity";
  } else if (claimTopic === BigInt(TokenClaimTopics.HOLLOWMARK_ABSENCE)) {
    return "Hollowmark Absence";
  } else {
    return "None";
  }
};
