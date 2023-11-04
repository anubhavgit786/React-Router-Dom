export const formatDate = (date) =>
{
    return new Intl.DateTimeFormat("en", 
    {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long",
    }).format(new Date(date));
}

export const convertToEmoji = (countryCode)=> 
{
    const codePoints = countryCode
                    .toUpperCase()
                    .split("")
                    .map((char) => 127397 + char.charCodeAt());
    
    return String.fromCodePoint(...codePoints);
}