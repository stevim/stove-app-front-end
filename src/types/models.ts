/* ---------===== custom props ====--------- */

export interface Day {
  id: number;
  dayDate: Date;
  profileId: number;
  weight: number;
  photo?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}


/* ---------===== auth models =====--------- */

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
