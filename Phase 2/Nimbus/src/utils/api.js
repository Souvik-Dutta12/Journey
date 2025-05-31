

export const fetchSearchResults = async (query) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=48f585797aac76a2988c3dabaeb0d424&units=metric&lang=en`
    );
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error('API Error:', error);
    return null;
  }
};
