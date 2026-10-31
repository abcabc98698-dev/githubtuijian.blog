/**
 * 42 Airport Brands Structured Database
 * Single source of truth extracted from comprehensive benchmarks.
 */

import airportsData from './airports.json';

export interface Plan {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  cycle: string;
}

export interface SpeedTest {
  region: string;
  ping: string;
  speed: string;
}

export interface Unlocks {
  chatgpt: 'yes' | 'no' | 'partial';
  claude: 'yes' | 'no' | 'partial';
  gemini: 'yes' | 'no' | 'partial';
  netflix: 'yes' | 'no' | 'partial';
  disney: 'yes' | 'no' | 'partial';
  youtube: 'yes' | 'no' | 'partial';
  tiktok: 'yes' | 'no' | 'partial';
}

export interface AirportBrand {
  id: string;
  slug: string;
  name: string;
  rank: number;
  isPrimary: boolean;
  affUrl: string;
  coupon: string;
  discount: string;
  entryPrice: string;
  established: string;
  lineType: string;
  protocols: string[];
  nodeCount: string;
  nodeRegions: string[];
  plans: Plan[];
  speedTests: SpeedTest[];
  unlocks: Unlocks;
  description: string;
  tags: string[];
}

export const AIRPORTS: AirportBrand[] = airportsData as AirportBrand[];

export const PRIMARY_AIRPORT: AirportBrand = AIRPORTS.find((a) => a.isPrimary) || AIRPORTS[0];

export const TOP_AIRPORTS: AirportBrand[] = AIRPORTS.slice(0, 10);

export function getAirportBySlug(slug: string): AirportBrand | undefined {
  return AIRPORTS.find((a) => a.slug.toLowerCase() === slug.toLowerCase());
}

export function getAirportsByLineType(lineType: string): AirportBrand[] {
  return AIRPORTS.filter((a) => a.lineType.includes(lineType));
}
