"use client"
import Card from "@/components/card/card";
import SearchBar from "@/components/searchBar/searchBar";
import { HospitalType } from "@/components/types/types";
import React, { useEffect, useState } from 'react';



function HospitalsList() {
  const [hospitals, setHospitals] = useState<HospitalType[]>([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await fetch('https://hakimhub-api-dev-wtupbmwpnq-uc.a.run.app/api/v1/search?institutions=true&articles=false&doctors=false', {
          method: 'POST',
        });

        if (!response.ok) {
          throw new Error(`Error fetching hospitals: ${response.status}`);
        }

        const data = await response.json();
        setHospitals(data.data);
        console.log(data); 
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };

    fetchHospitals();
    
  }, []);

  function isOpenNow(availability: { twentyFourHours: boolean; startDay: string; endDay: string }): string {
    
    if (availability.twentyFourHours) {
      return "Open Now";
    }
  
    const today = new Date().getDay(); 
    const startDayNum = parseInt(availability.startDay[0]);
    const endDayNum = parseInt(availability.endDay[0]);
  
    if (endDayNum < startDayNum) {
      return today in range(startDayNum, 7) || today in range(0, endDayNum + 1) ? "Open Now" : "Closed Now";
    } else {
      return today in range(startDayNum, endDayNum + 1) ? "Open Now" : "Closed Now";
    }
  }
  
  function range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-start">
      <SearchBar />

      {
      hospitals.map((hospital) => {
        return (
          
           <Card key={hospital._id} imgUrl={hospital.photo} name={hospital.institutionName} phones={hospital.phoneNumbers} 
           address={hospital.address.summary} availability={isOpenNow(hospital.availability)} emails={hospital.emails} />
           
        )
      })
      }
        
    </div>
  );
}

export default HospitalsList;
