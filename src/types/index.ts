export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  month: string;
}

export interface Story {
  id: number;
  name: string;
  faculty: string;
  description: string;
  image: string;
}

export interface TeamMemberBase {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface TeamMemberFull extends TeamMemberBase {
  fullImage: string;
  description: string;
  contacts: {
    email: string;
    telegram: string;
    phone: string;
  };
}
