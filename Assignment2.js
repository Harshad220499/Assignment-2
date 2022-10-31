
let array = [
    { language: "JavaScript" },
    { language: "JavaScript" },
    { language: "C++" },
    { language: "TypeScript" },
  ];
  let countOccurrnce={};
  array.forEach(val =>(countOccurrnce[val.language]=(countOccurrnce[val.language] || 0) + 1));
  let result=[];
  for(language in countOccurrnce){
    result.push({language: language, count: countOccurrnce[language]});

}
  console.log(result)