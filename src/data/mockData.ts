import {
  Workspace,
  Source,
  Person,
  Conversation,
  Message,
  TimelineEvent,
  Report,
  LocationEntry,
  NetworkNode,
  NetworkEdge,
} from '../types/index';

export const DEMO_DATA_LABEL = 'Sample Data';

export const mockWorkspaces: Workspace[] = [
  {
    id: 'ws-1',
    name: 'Personal Archive 2024',
    path: '/Users/you/Archives/Personal',
    lastOpened: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    reportCount: 7,
    status: 'active',
  },
  {
    id: 'ws-2',
    name: 'Family History',
    path: '/Users/you/Archives/Family',
    lastOpened: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    createdAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
    reportCount: 3,
    status: 'active',
  },
];

export const mockSources: Source[] = [
  {
    id: 'src-1',
    workspaceId: 'ws-1',
    name: 'Facebook Export Jan 2024',
    type: 'facebook',
    path: '/Users/you/Downloads/facebook_export_jan.zip',
    status: 'checked',
    dateAdded: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
    recordsFound: 4234,
    lastAnalysis: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'src-2',
    workspaceId: 'ws-1',
    name: 'iMessage Export 2023-2024',
    type: 'imessage',
    path: '/Users/you/Downloads/imessage_backup.zip',
    status: 'ready',
    dateAdded: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
    recordsFound: 8912,
    lastAnalysis: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'src-3',
    workspaceId: 'ws-1',
    name: 'Google Takeout 2024',
    type: 'google',
    path: '/Users/you/Downloads/google_takeout.zip',
    status: 'needs_attention',
    dateAdded: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    recordsFound: 2156,
    lastAnalysis: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    warnings: ['Some Gmail attachments could not be indexed', 'Calendar has missing event details'],
  },
];

export const mockPeople: Person[] = [
  {
    id: 'p-1',
    name: 'Sample Person A',
    platform: 'Facebook',
    messageCount: 342,
    firstSeen: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000),
    lastSeen: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    tags: ['Close Friend', 'College'],
    aliases: ['PersonA', 'SPA'],
  },
  {
    id: 'p-2',
    name: 'Family Member',
    platform: 'iMessage',
    messageCount: 1203,
    firstSeen: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
    lastSeen: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    tags: ['Family', 'Daily Contact'],
    aliases: ['FM', 'Mom'],
    contactDetails: {
      phone: '(555) 123-4567',
    },
  },
  {
    id: 'p-3',
    name: 'Old Friend',
    platform: 'Facebook',
    messageCount: 89,
    firstSeen: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
    lastSeen: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
    tags: ['High School', 'Occasional'],
    aliases: ['OF'],
  },
  {
    id: 'p-4',
    name: 'Work Contact',
    platform: 'Google Takeout',
    messageCount: 567,
    firstSeen: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000),
    lastSeen: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    tags: ['Work', 'Professional'],
    aliases: ['WC', 'ContactName'],
    contactDetails: {
      email: 'work.contact@example.com',
    },
  },
];

export const mockConversations: Conversation[] = [
  {
    id: 'conv-1',
    participants: [mockPeople[0], mockPeople[1]],
    messageCount: 342,
    startDate: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000),
    endDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    platform: 'Facebook',
    summary: 'Regular conversations about college memories and recent life updates',
    isDerived: true,
  },
  {
    id: 'conv-2',
    participants: [mockPeople[1]],
    messageCount: 1203,
    startDate: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
    endDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    platform: 'iMessage',
    summary: 'Daily family conversations covering various topics',
    isDerived: false,
  },
];

export const mockMessages: Message[] = [
  {
    id: 'msg-1',
    conversationId: 'conv-1',
    sender: mockPeople[0],
    content: 'Hey! How have you been? It feels like forever since we last talked!',
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'msg-2',
    conversationId: 'conv-1',
    sender: mockPeople[1],
    content: 'I know right! Things have been pretty busy. How about you?',
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000 + 3600000),
  },
  {
    id: 'msg-3',
    conversationId: 'conv-2',
    sender: mockPeople[1],
    content: 'Running late, be home soon',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
  },
];

export const mockTimelineEvents: TimelineEvent[] = [
  {
    id: 'te-1',
    title: 'College Reunion Planning',
    date: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
    source: 'Facebook',
    description: 'Discussion about organizing college reunion',
    confidence: 'explicit',
    itemCount: 23,
  },
  {
    id: 'te-2',
    title: 'Holiday Celebration',
    date: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000),
    source: 'iMessage',
    confidence: 'explicit',
    itemCount: 156,
  },
  {
    id: 'te-3',
    title: 'Job Change Period',
    date: new Date(Date.now() - 150 * 24 * 60 * 60 * 1000),
    source: 'Google Takeout',
    confidence: 'inferred',
    itemCount: 89,
  },
];

export const mockReports: Report[] = [
  {
    id: 'rpt-1',
    workspaceId: 'ws-1',
    type: 'summary',
    title: 'Summary Report',
    description: 'Overview of your archive contents and key statistics',
    generatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    sourceCount: 3,
  },
  {
    id: 'rpt-2',
    workspaceId: 'ws-1',
    type: 'network',
    title: 'Relationship Network',
    description: 'Map of connections and interactions between people',
    generatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    sourceCount: 3,
  },
  {
    id: 'rpt-3',
    workspaceId: 'ws-1',
    type: 'timeline',
    title: 'Timeline Report',
    description: 'Key events and milestones across your archive',
    generatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    sourceCount: 3,
  },
  {
    id: 'rpt-4',
    workspaceId: 'ws-1',
    type: 'conversations',
    title: 'Conversations Report',
    description: 'Analysis of conversations and communication patterns',
    generatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    sourceCount: 2,
  },
];

export const mockLocations: LocationEntry[] = [
  {
    id: 'loc-1',
    name: 'New York, NY',
    source: 'Facebook',
    mentions: 24,
    firstMentioned: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000),
    lastMentioned: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'loc-2',
    name: 'San Francisco, CA',
    source: 'Google Takeout',
    mentions: 12,
    firstMentioned: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000),
    lastMentioned: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'loc-3',
    name: 'Home',
    source: 'iMessage',
    mentions: 156,
    firstMentioned: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
    lastMentioned: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
  },
];

export const mockNetworkNodes: NetworkNode[] = [
  { id: 'n-1', name: 'Sample Person A', type: 'person', interactionCount: 342 },
  { id: 'n-2', name: 'Family Member', type: 'person', interactionCount: 1203 },
  { id: 'n-3', name: 'Old Friend', type: 'person', interactionCount: 89 },
  { id: 'n-4', name: 'Work Contact', type: 'person', interactionCount: 567 },
  { id: 'n-5', name: 'College Group', type: 'group', interactionCount: 234 },
];

export const mockNetworkEdges: NetworkEdge[] = [
  { id: 'e-1', source: 'n-1', target: 'n-2', weight: 0.8, interactions: 45 },
  { id: 'e-2', source: 'n-1', target: 'n-3', weight: 0.6, interactions: 23 },
  { id: 'e-3', source: 'n-2', target: 'n-4', weight: 0.4, interactions: 12 },
  { id: 'e-4', source: 'n-1', target: 'n-5', weight: 0.7, interactions: 67 },
  { id: 'e-5', source: 'n-3', target: 'n-5', weight: 0.5, interactions: 34 },
];
