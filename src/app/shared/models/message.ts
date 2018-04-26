export class Message {
  $key?: string;
  email?: string;
  userName?: string;
  message?: string;
  timeSent?: string; // Date = new Date();
}


export interface MailData {
  $key?: string;
  mail: string;
  firstName: string;
  lastName: string;
  message: string;
}
