export type SourceType = 'facebook' | 'imessage' | 'google' | 'unknown';
export type AnalysisStatus = 'idle' | 'running' | 'completed' | 'failed';
export type SourceStatus = 'ready' | 'checked' | 'needs_attention' | 'failed' | 'archived';
export type ReportType = 'summary' | 'network' | 'timeline' | 'conversations' | 'media' | 'warning' | 'evidence';

export interface Workspace {
  id: string;
  name: string;
  path: string;
  lastOpened: Date;
  createdAt: Date;
  reportCount: number;
  status: 'active' | 'archived';
}

export interface Source {
  id: string;
  workspaceId: string;
  name: string;
  type: SourceType;
  path: string;
  status: SourceStatus;
  dateAdded: Date;
  recordsFound: number;
  lastAnalysis?: Date;
  warnings?: string[];
}

export interface AnalysisRun {
  id: string;
  workspaceId: string;
  status: AnalysisStatus;
  startedAt: Date;
  completedAt?: Date;
  sourcesProcessed: number;
  itemsExtracted: number;
  currentStage: 'intake' | 'extract' | 'normalize' | 'derive' | 'output';
  warnings?: string[];
  logs?: LogEntry[];
}

export interface LogEntry {
  timestamp: Date;
  level: 'info' | 'warn' | 'error';
  module: string;
  message: string;
  metadata?: Record<string, unknown>;
}

export interface Report {
  id: string;
  workspaceId: string;
  type: ReportType;
  title: string;
  description: string;
  generatedAt: Date;
  sourceCount: number;
  data?: Record<string, unknown>;
}

export interface Person {
  id: string;
  name: string;
  platform: string;
  messageCount: number;
  firstSeen: Date;
  lastSeen: Date;
  tags: string[];
  aliases: string[];
  contactDetails?: {
    email?: string;
    phone?: string;
  };
}

export interface Conversation {
  id: string;
  participants: Person[];
  messageCount: number;
  startDate: Date;
  endDate: Date;
  platform: string;
  summary?: string;
  isDerived?: boolean;
}

export interface Message {
  id: string;
  conversationId: string;
  sender: Person;
  content: string;
  timestamp: Date;
  attachments?: Attachment[];
}

export interface Attachment {
  id: string;
  type: 'image' | 'video' | 'audio' | 'file' | 'link';
  filename?: string;
  url?: string;
  size?: number;
}

export interface TimelineEvent {
  id: string;
  title: string;
  date: Date;
  source: string;
  description?: string;
  confidence: 'explicit' | 'inferred';
  itemCount: number;
}

export interface MediaItem {
  id: string;
  type: 'image' | 'video' | 'audio';
  filename: string;
  url?: string;
  date: Date;
  source: string;
  person?: Person;
}

export interface LocationEntry {
  id: string;
  name: string;
  source: string;
  mentions: number;
  firstMentioned: Date;
  lastMentioned: Date;
}

export interface NetworkNode {
  id: string;
  name: string;
  type: 'person' | 'group';
  interactionCount: number;
}

export interface NetworkEdge {
  id: string;
  source: string;
  target: string;
  weight: number;
  interactions: number;
}

export interface Evidence {
  id: string;
  reportId: string;
  type: 'source' | 'message' | 'event' | 'inference';
  content: string;
  sourceFile?: string;
  confidence: number;
  rawData?: Record<string, unknown>;
}
