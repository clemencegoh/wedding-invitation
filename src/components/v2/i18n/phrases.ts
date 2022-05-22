const greeting1 = ["Dearest ", "亲爱的 "];
const greeting2 = [
  "We are getting married on ",
  "我们会在 2022 年 10 月 08 日举行结婚喜宴",
];
const greeting3 = ["8 October 2022 ", ""];
const greeting4 = [
  "And we'd lose for you to join us there for our special day.",
  "您的光临将是我们最大的荣幸",
];
const pleaseRSVP = [
  "Please RSVP before August 1st.",
  "请您在 8 月 01 日前登记出席",
];
const RSVPButtonText = ["RSVP here", "登记出席"];

/**
 * i18n phrases for easy switching
 */
export const landingPhrases = {
  english: {
    greeting1: greeting1[0],
    greeting2: greeting2[0],
    greeting3: greeting3[0],
    greeting4: greeting4[0],
    pleaseRSVP: pleaseRSVP[0],
    RSVPButtonText: RSVPButtonText[0],
  },
  chinese: {
    greeting1: greeting1[1],
    greeting2: greeting2[1],
    greeting3: greeting3[1],
    greeting4: greeting4[1],
    pleaseRSVP: pleaseRSVP[1],
    RSVPButtonText: RSVPButtonText[1],
  },
} as {
  [lang: string]: {
    [key: string]: string;
  };
};

const formStep1greet = [
  "We would like to request the pleasure of your company at the celebration of our wedding",
  "我们的婚礼会将在",
];
const formStep1date = [
  "Date: 8 October 2022 (Saturday)",
  "日期: 2022 年 10 月 08 日 （星期六）",
];
const formStep1time = ["Time: 7PM", "时间: 7PM"];
const formStep1venue = [
  "Venue: Hilton Singapore Orchard, 333 Orchard Rd, Singapore 238867",
  "地点: Hilton Singapore Orchard, 333 Orchard Rd, Singapore 238867",
];
const formStep1joinus = ["Will you be able to join us?", "请问您能出席吗？"];
const formfieldCompulsory = ["*This field is compulsory", "*请输入回复"];
const formConfirm = ["Yes, I'm able to attend", "能够出席"];
const formReject = ["No, I'm unable to attend", "不能出席"];

const formConfirmation1 = [
  "You have successfully confirmed the attendence for ",
  "You have successfully confirmed the attendence for ",
];
const formConfirmation2 = [
  "Looking forward to seeing you at our wedding!",
  "Looking forward to seeing you at our wedding!",
];
const formConfirmationFootnote = [
  "Take a screenshot in the meantime while we prepare your physical invitations",
  "Take a screenshot in the meantime while we prepare your physical invitations",
];
const formConfirmationFretnot = [
  "Fret not if you made any mistakes in the RSVP. You may submit the form again before the stipulated deadline.",
  "Fret not if you made any mistakes in the RSVP. You may submit the form again before the stipulated deadline.",
];

const prematureEnd1 = [
  "We have taken note and thank you for letting us know!",
  "We have taken note and thank you for letting us know!",
];
const prematureEnd2 = [
  "Have a great day and see you soon!",
  "Have a great day and see you soon!",
];

const formStep2Greet = [
  "Which of your party will be attending our wedding?",
  "谁会和您一起出席？",
];

const formStep3Greet = [
  "Are there any dietary restrictions or food allergies that you and/or your party has that we should know of?",
  "您有任何的饮食需求或食物过敏吗？",
];
const formStep3Example = ["Eg: Jane - Vegetarian", "Eg: 小明 - 素食主义者"];
const formStep3TextHint = [
  "Enter dietary restrictions or food allergies",
  "饮食需求或食物过敏",
];
const formStepNext = ["Next", "继续"];
const formStepSubmitRSVP = ["Submit RSVP", "提交"];

export const formFillPhrases = {
  english: {
    formStep1greet: formStep1greet[0],
    formStep1date: formStep1date[0],
    formStep1time: formStep1time[0],
    formStep1venue: formStep1venue[0],
    formStep1joinus: formStep1joinus[0],
    formfieldCompulsory: formfieldCompulsory[0],
    formConfirm: formConfirm[0],
    formReject: formReject[0],
    formConfirmation1: formConfirmation1[0],
    formConfirmation2: formConfirmation2[0],
    formConfirmationFootnote: formConfirmationFootnote[0],
    formConfirmationFretnot: formConfirmationFretnot[0],
    prematureEnd1: prematureEnd1[0],
    prematureEnd2: prematureEnd2[0],
    formStep2Greet: formStep2Greet[0],
    formStep3Greet: formStep3Greet[0],
    formStep3Example: formStep3Example[0],
    formStep3TextHint: formStep3TextHint[0],
    formStepNext: formStepNext[0],
    formStepSubmitRSVP: formStepSubmitRSVP[0],
  },
  chinese: {
    formStep1greet: formStep1greet[1],
    formStep1date: formStep1date[1],
    formStep1time: formStep1time[1],
    formStep1venue: formStep1venue[1],
    formStep1joinus: formStep1joinus[1],
    formfieldCompulsory: formfieldCompulsory[1],
    formConfirm: formConfirm[1],
    formReject: formReject[1],
    formConfirmation1: formConfirmation1[1],
    formConfirmation2: formConfirmation2[1],
    formConfirmationFootnote: formConfirmationFootnote[1],
    formConfirmationFretnot: formConfirmationFretnot[1],
    prematureEnd1: prematureEnd1[1],
    prematureEnd2: prematureEnd2[1],
    formStep2Greet: formStep2Greet[1],
    formStep3Greet: formStep3Greet[1],
    formStep3Example: formStep3Example[1],
    formStep3TextHint: formStep3TextHint[1],
    formStepNext: formStepNext[1],
    formStepSubmitRSVP: formStepSubmitRSVP[1],
  },
} as {
  [lang: string]: {
    [key: string]: string;
  };
};
