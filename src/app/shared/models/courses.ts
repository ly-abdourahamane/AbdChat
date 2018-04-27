import {UserData} from './user';

export class Course {
  $key?: string;
  name: string;
  path: string;
  description: string;
  creationTime: string;
}

export class Subject {
  $key?: string;
  title: string;
  subtitle: string;
  description: string;
  creationTime?: string;
  user?: UserData;
  displayName: string;
}

export class DiscussionMessage {
  $key?: string;
  user?: UserData;
  opinion: string;
  creationTime: string;
  displayName: string;
}
