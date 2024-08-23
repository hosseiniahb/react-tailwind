import { MouseEvent, ReactNode } from "react";
import { IconType } from "react-icons";

export type T_SidebarLink = {
  label: string;
  icon: IconType;
};

export type T_Button = {
  type?: "button" | "reset" | "submit" | undefined;
  children?: ReactNode;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary" | "transparent" | "dark";
  className?: string;
  disabled?: boolean;
};

export type T_Id_Video = {
  kink: string;
  videoId?: string;
  playlistId?: string;
  channelId?: string;
};

export type T_Thumbnails_Video = {
  default: {
    height: number;
    url: string;
    width: number;
  };
  high: {
    height: number;
    url: string;
    width: number;
  };
  medium: {
    height: number;
    url: string;
    width: number;
  };
};

export type T_Snippet_Video = {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: "none" | "live";
  publishTime: string | null;
  publishAt: string | null;
  thumbnails: T_Thumbnails_Video;
  title: string;
};

export type T_Video = {
  id: T_Id_Video;
  kind: string;
  snippet: T_Snippet_Video;
};

export type T_ChannelBrandingSettings = {
  channel: {
    country: string;
    description: string;
    keywords: string;
    title: string;
    unsubscribedTrailer: string;
  };
  image: {
    bannerExternalUrl: string;
  };
};

export type T_ChannelContentDetails = {
  relatedPlaylists: {
    likes: string;
    uploads: string;
  };
};

export type T_ChannelStatistics = {
  hiddenSubscriberCount: boolean;
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
  likeCount?: string;
};

export type T_ChannelDetail = {
  brandingSettings?: T_ChannelBrandingSettings;
  contentDetails?: T_ChannelContentDetails;
  id: T_Id_Video;
  kind: string;
  snippet: T_Snippet_Video;
  statistics?: T_ChannelStatistics;
};

export type T_VideoStatistics = {
  videoCount: string;
  viewCount: string;
  likeCount: string;
};

export type T_VideoDetail = {
  snippet: T_Snippet_Video;
  statistics: T_VideoStatistics;
};
