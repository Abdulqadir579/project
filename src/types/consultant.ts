export interface Consultant {
  name: string;
  qualifications: string[];
  image: string;
  specialties: string[];
  role: string;
  achievements: string[];
  experience: {
    years: number;
    details: string[];
  };
  expertise: string[];
  whatsappNumber: string;
}