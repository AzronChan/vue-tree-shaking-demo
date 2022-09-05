// 意见类型：1-意见反馈 2-服务评价
export const SUGGEST_TYPE = {
  SUGGESTION: 1,
  EVALUATE: 2,
};
export const SUGGEST_TYPE_OPTIONS = [
  { value: SUGGEST_TYPE.SUGGESTION, label: "意见反馈" },
  { value: SUGGEST_TYPE.EVALUATE, label: "服务评价" },
];

// 平台：1-IOS 2-Android
export const PLATFORM = {
  IOS: 1,
  ANDROID: 2,
};
export const PLATFORM_OPTIONS = [
  { value: PLATFORM.IOS, label: "IOS" },
  { value: PLATFORM.ANDROID, label: "Android" },
];

// 业务类型： 1-专车 2-顺风车
export const BUSINESS_TYPE = {
  SPECIAL: "专快车",
  HITCH: "顺风车",
};
export const BUSINESS_TYPE_OPTIONS = [
  { value: BUSINESS_TYPE.SPECIAL, label: "专快车" },
  { value: BUSINESS_TYPE.HITCH, label: "顺风车" },
];

// 渠道：0-C端 1-B端
export const CHANNEL = {
  TO_C: 0,
  TO_B: 1,
};
export const CHANNEL_OPTIONS = [
  { value: CHANNEL.TO_C, label: "C端" },
  { value: CHANNEL.TO_B, label: "B端" },
];
