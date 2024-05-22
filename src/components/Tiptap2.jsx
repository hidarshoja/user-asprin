import  { useRef } from "react"
import { Editor } from "@tinymce/tinymce-react";

export default function Tiptap2({editorRef}) {
  return (
    <>
    <Editor
      apiKey="i4uqp6tt1orn6shorzbgvwo2c0ew8wiziym0v2pb2cxycufy"
      onInit={(evt, editor) => (editorRef.current = editor)}
      init={{
        height: 314,
        width: '100%',
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          " blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Samim,Arial,sans-serif; font-size:14px }",
          directionality: "rtl"
      }}
    />
   
  </>
  )
}
