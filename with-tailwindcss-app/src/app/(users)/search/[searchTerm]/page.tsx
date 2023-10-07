import React from "react";

type PageProps = {
  params: {
    searchTerm: string;
  };
};

type SearchResult = {
    organic_results:[
        {
            position:number;
            title:string;
            link:string;
            thumbnail:string;
            snippet:string
        }
    ]
}

const search = async(searchTerm:string)=>{
    const res = await fetch(
        `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
      );
    //   throw new Error("WHOOPS somthing broke");
      const data:SearchResult = await res.json();
    //   console.log(data)
      return data;
}

const SearchResults = async ({params:{searchTerm}}:PageProps) => {
  const searchResults = await search(searchTerm);
//   console.log(searchResults)
  return <div>
    <p className="text-gray-500 text-sm">You Searched For : {searchTerm}</p>
    <ol className="space-y-5 p-5">
        {searchResults.organic_results.map((result)=>(
            <li key={result.position} className="list-decimal">
                <p className="font-bold"> {result.title} </p>
                <p> {result.snippet} </p>
            </li>
        ))}
    </ol>
  </div>;
};

export default SearchResults;
