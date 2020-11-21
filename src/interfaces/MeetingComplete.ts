import { Meeting } from "./Meeting";

export interface MeetingComplete extends Meeting {
  fullDescriptionHtml: string;
  recordedVideoUrl: string;
}
