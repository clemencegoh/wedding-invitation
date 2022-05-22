export const baseUrl = process.env.PUBLIC_URL;
export const paths = {
  home: `${baseUrl}/:invitationCode`,
  oopsPage: `${baseUrl}`,
  formFill: `${baseUrl}/:invitationCode/rsvp`,
  eventDetails: `${baseUrl}/:invitationCode/event-details`,
};
