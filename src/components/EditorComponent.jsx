// import React, { useCallback, useEffect, useMemo, useRef } from 'react';
// import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
// import "../styles/EditorComponent.module.css"; // Import your custom styles
// import { useEvent } from '../context/AppContext';
// import $ from 'jquery';  // Import jQuery

// const EditorComponent = (props) => {
//   const { value } = props;
//   const isInitialized = useRef(false);
//   const { event, setEvent } = useEvent();

//   // Direct handler to update the event state
//   const handleEditorChange = useCallback((content) => {
//     setEvent((prev) => ({
//       ...prev,
//       ["description"]: content
//     }));
//   }, []);

//   // Memoize ReactSummernoteLite to prevent unnecessary re-renders
//   const memoizedEditor = useMemo(() => (
//     <ReactSummernoteLite
//       id="summernote"
//       onChange={handleEditorChange}
//       onInit={(({ note }) => {
//         if (!isInitialized.current && value !== '') {
//           isInitialized.current = true;
          
//           // Initialize Summernote and paste the HTML content if `value` exists
//           note.summernote('pasteHTML', value);
//         }
//       })}
//     />
//   ), [value]); // Only recreate if `value` changes

//   // Ensure Summernote and jQuery are loaded and initialized correctly
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       window.$ = $;
//       window.jQuery = $;
//     }
//   }, []);

//   return (
//     <div className="summernote-container">
//       {memoizedEditor}
//     </div>
//   );
// };

// export default EditorComponent;

export default function EditorComponet(){
  return <>
    <div></div>
  </>
}