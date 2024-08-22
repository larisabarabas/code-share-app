"use client"
import Editor from "@monaco-editor/react";
import { FormEventHandler, ReactEventHandler, useEffect, useState } from "react";
import { Button } from "@/lib/definitions";

export default function EditorIDE({primaryButton, handleSubmit} : {primaryButton: Button, handleSubmit: FormEventHandler}){
  const DEFAULT_LANGUAGE = 'javascript'
 
  const themeOptions = [
    {id:1, value: 'light', name: 'Light', color:'white'},
    {id:2, value: 'vs-dark', name: 'VS-Dark', color: 'vs-dark'}
  ]

  const [ideLanguage, setIdeLanguage] = useState(DEFAULT_LANGUAGE)
  const [ideTheme, setIdeTheme] = useState(themeOptions[0])


  return (
  <div className="flex justify-center items-start pt-10 h-screen">
    <div className="w-full max-w-5xl p-4 border bg-white rounded-lg">
      <form action="#" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="comment" className="sr-only">
            Add your code
          </label>
          <Editor
            height="50vh"
            defaultLanguage={DEFAULT_LANGUAGE}
            language={ideLanguage}
            defaultValue='Deno.serve(req => new Response("Hello!"));'
            theme={ideTheme}
          />
        </div>
        <div className="flex justify-between pt-2">
          <div className="flex items-center space-x-8">
            {/* // language selector */}
            <div className=" px-4 py-1 bg-gray-200 rounded-full"><p className="text-sm font-outfit text-gray-600">{ideLanguage}</p></div>
            {/* // theme selector */}
            <div className=" px-4 py-1 bg-gray-200 rounded-full"><p className="text-sm font-outfit text-gray-600">{ideTheme.value}</p></div>
          </div>
          <div className="flex-shrink-0">
            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              {primaryButton.title}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
  
}