import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string, locale: string = 'de-CH'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateTime(date: Date | string, locale: string = 'de-CH'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatCurrency(amount: number, currency: string = 'CHF'): string {
  return new Intl.NumberFormat('de-CH', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function formatPhoneNumber(phone: string): string {
  // Swiss phone format: +41 XX XXX XX XX
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('41') && cleaned.length === 11) {
    return `+41 ${cleaned.slice(2, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7, 9)} ${cleaned.slice(9)}`;
  }
  return phone;
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[äÄ]/g, 'ae')
    .replace(/[öÖ]/g, 'oe')
    .replace(/[üÜ]/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Agent type helpers
export const agentTypeLabels: Record<string, string> = {
  REZEPTION: 'Rezeption',
  EMAIL: 'E-Mail-Assistent',
  MARKETING: 'Marketing',
  BUCHHALTUNG: 'Buchhaltung',
  BACKOFFICE: 'Backoffice',
  LEAD_QUALIFIER: 'Lead-Qualifizierung',
  TERMINIERUNG: 'Terminierung',
  SUPPORT: 'Kundensupport',
  FOLLOW_UP: 'Follow-Up',
  KUNDENZUFRIEDENHEIT: 'Kundenzufriedenheit',
  WEBSITE: 'Website-Assistent',
  LOCAL_MARKETING: 'Local Marketing',
  WERBE: 'Werbung',
  SALES_SUPPORT: 'Verkaufsunterstützung',
  TALENTSCOUT: 'Talent Scout',
  DATENBROKER: 'Datenbroker',
  SEGMENT_PERSONA: 'Segment & Persona',
  SCORING: 'Lead Scoring',
  LEAD_AKTIVIERUNG: 'Lead-Aktivierung',
  STARTUP: 'Startup-Berater',
  BUSINESSPLAN: 'Businessplan',
  TECHNOLOGIE: 'Technologie',
  AGENT_OF_AGENTS: 'Agent der Agenten',
};

export const agentStatusLabels: Record<string, string> = {
  ACTIVE: 'Aktiv',
  INACTIVE: 'Inaktiv',
  PAUSED: 'Pausiert',
  ERROR: 'Fehler',
  LEARNING: 'Lernt',
};

export const agentStatusColors: Record<string, string> = {
  ACTIVE: 'bg-green-500',
  INACTIVE: 'bg-gray-400',
  PAUSED: 'bg-yellow-500',
  ERROR: 'bg-red-500',
  LEARNING: 'bg-blue-500',
};

export const priorityLabels: Record<string, string> = {
  LOW: 'Niedrig',
  NORMAL: 'Normal',
  HIGH: 'Hoch',
  URGENT: 'Dringend',
};

export const priorityColors: Record<string, string> = {
  LOW: 'text-gray-500 bg-gray-100',
  NORMAL: 'text-blue-600 bg-blue-100',
  HIGH: 'text-orange-600 bg-orange-100',
  URGENT: 'text-red-600 bg-red-100',
};

