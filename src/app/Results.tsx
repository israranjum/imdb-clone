import { NextPage } from "next";
import React from "react";
import Card from "./Components/Card";

interface ResultIMDB {
  id: number;
  original_title: string;
}

const Results = (props: any) => {
  // console.log(props.result.id);
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl: grid-cols-5 max-w-6xl mx-auto py-4">
      {props.results.map((result: ResultIMDB) => {
        return <Card key={result.id} result={result} />;
      })}
    </div>
  );
};

export default Results;
