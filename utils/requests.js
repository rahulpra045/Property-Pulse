const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;


//Fetch all properties
async function fetchProperties() {
    try {

        //Handle the case where the domain is not available yet

        if (!apiDomain) {
            return [];
        }
      const res = await fetch(`${apiDomain}/properties`);
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      console.log('Response from API:', res);
      const data = await res.json();
  
      if (!data || Object.keys(data).length === 0) {
        throw new Error('Empty response or invalid data format');
      }
  
      return data;
    } catch (error) {
      console.error('Error fetching properties:', error);
    //    throw error; // rethrow the error to handle it in the caller function
        return [];
    }
}

//Fetch single property
  
async function fetchProperty(id) {
    try {

        //Handle the case where the domain is not available yet

        if (!apiDomain) {
            return null;
        }
      const res = await fetch(`${apiDomain}/properties/${id}`);
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      console.log('Response from API:', res);
      const data = await res.json();
  
      if (!data || Object.keys(data).length === 0) {
        throw new Error('Empty response or invalid data format');
      }
  
      return data;
    } catch (error) {
      console.error('Error fetching properties:', error);
    //    throw error; // rethrow the error to handle it in the caller function
        return null;
    }
}

export  {fetchProperties, fetchProperty};