export interface HospitalType {
   _id: string;
 
 
   address: {
     region: string;
     woreda: string;
     zone: string;
     summary: string;
   };
 
 
   availability: {
     twentyFourHours: boolean;
     startDay: string;
     endDay: string;
     opening: string;
     closing: string;
   };
 
 
   photo: string;
 
 
   phoneNumbers: string[];
   emails: string[];
   institutionName: string;
 }


 export interface CardProps {
   _id?: string
   name: string; // Single name for the card
   phones: string[];
   emails: string[];
   address: string;
   distance?: string;
   imgUrl: string;
   availability: string;
 }