import{u as c,j as s,a}from"./index-IHb8sIfT.js";const d=[{name:"Problem Title",uid:"problem"},{name:"User",uid:"user"},{name:"Language",uid:"language"},{name:"Status",uid:"status"}],b=t=>{const i=c();return s.jsx("div",{className:t.className,children:s.jsxs("table",{className:a("table"),"aria-label":"Problem Table",children:[s.jsx("thead",{children:s.jsx("tr",{className:"border-base-content/10",children:d.map(e=>s.jsx("th",{children:e.name},e.uid))})}),s.jsx("tbody",{children:t.data.map((e,l)=>{var r,n;return s.jsxs("tr",{className:a(t.data.length>1?"border-base-content/10":"border-0",t.enableRouting?"hover cursor-pointer":""),onClick:()=>{t.enableRouting&&i(e.UID)},children:[s.jsx("th",{children:(r=e.problem)==null?void 0:r.title}),s.jsx("td",{children:(n=e.user)==null?void 0:n.name}),s.jsx("td",{children:e.language}),s.jsx("td",{children:s.jsx("div",{className:a("badge border-0 font-semibold",e.status==="finished"&&e.verdict==="Accepted"?"bg-success/10 text-success":"",e.status==="finished"&&e.verdict==="WrongAnswer"?"bg-error/10 text-error":"",e.status==="finished"&&e.verdict==="CompileError"?"bg-warning/10 text-warning":"",e.status==="pending"?"bg-primary/10 text-primary":"",e.status==="running"?"bg-secondary/10 text-secondary":""),children:e.status==="finished"?e.verdict:e.status})})]},l)})})]})})};export{b as J};