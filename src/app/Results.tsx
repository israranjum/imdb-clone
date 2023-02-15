import { NextPage } from "next";
import React from "react";

interface ResultIMDB {
  id: number;
  original_title: string;
}

const Results = (props: any) => {
  // console.log(props.result.id);
  return (
    <div>
      {props.results.map((result: ResultIMDB) => {
        return <div key={result.id}>{result.original_title}</div>;
      })}
    </div>
  );
};

export default Results;
