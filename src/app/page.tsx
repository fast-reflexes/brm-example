import React from "react";
import {ExampleMath} from "@/app/ExampleMath";
import {MathJaxProvider} from "@/app/MathJaxProvider";

export default function Home() {
  return (
      <MathJaxProvider>
          <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div style={{ fontSize: '4rem'}}>
             <ExampleMath />
            </div>
          </main>
      </MathJaxProvider>
  )
}
