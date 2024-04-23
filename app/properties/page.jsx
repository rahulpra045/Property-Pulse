'use client'
import { useEffect, useState } from 'react';
import { fetchProperties } from '@/utils/requests';

import { PropertyCard } from "@/components/PropertyCard";


const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data);
      } catch (error) {
        // Handle error here
      }
    };

    fetchData();
  }, []);

  //sort properties by date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property}/>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;





// // import properties from "@/properties.json";
// import { PropertyCard } from "@/components/PropertyCard";

// async function fetchProperties() {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);

//     if (!res.ok) {
//       throw new Error('Failed to fetch data');
//     }

//     console.log('Response from API:', res);
//     const data = await res.json();

//     if (!data ||Object.keys(data).length === 0) {
//       throw new Error('Empty response or invalid data format');
//     }

//     return data;
    
//     // return res.json();
//   } catch (error) {
//     console.error('Error fetching properties:', error);
//     throw error; // rethrow the error to handle it in the caller function
//   }
// }

// const PropertiesPage = async () => {
//   const properties =  await fetchProperties();
//   return (
//     <section className="px-4 py-6">
//       <div className="container-xl lg:container m-auto px-4 py-6">
//         {properties?.length === 0 ? (
//           <p>No properties found</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {properties.map((property) => (
//               <PropertyCard key={property._id} property={property}/>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default PropertiesPage;
