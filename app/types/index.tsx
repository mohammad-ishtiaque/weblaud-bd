export interface Service {
    title: string;
    description: string;
    subtitle?: string;
    features: string[];
  }
  
  export interface TeamMember {
    name: string;
    role: string;
    position: string;
  }
  
  export interface Project {
    title: string;
    description: string;
    category: string;
  }
  
  export interface Stat {
    number: string;
    label: string;
  }
  
  export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }