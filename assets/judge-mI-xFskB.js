import{e as l,r as a}from"./index-IHb8sIfT.js";var g;(e=>{async function u(t,n,c){let d=JSON.stringify({code:n,language:c}),o=await l.post(`/api/v1/problem/${t}/judge`,d);if(o.status!==200)throw Error("failed to run judge");return o.data}e.postJudge=u;async function r(){let t=await l.get("/api/v1/judge");if(t.status!==200)throw Error("failed to get judge list");return t.data}e.getJudgeList=r;async function s(t){let n=await l.get(`/api/v1/judge/${t}`);if(n.status!==200)throw Error("failed to get judge detail");return n.data}e.getJudge=s})(g||(g={}));const p=e=>{const[u,r]=a.useState();a.useEffect(()=>{g.getJudge(e).then(t=>{r(t)}).catch(t=>{console.log(t)})},[e]);function s(){return u}return{getJudge:s}},h=e=>{const[u,r]=a.useState(""),[s,t]=a.useState(""),[n,c]=a.useState([]);function f(o){g.postJudge(e,u,s).then(i=>{c(i),o()}).catch(i=>{console.log(i)})}function d(){return n}return{runJudge:f,getVerdicts:d,setSrc:r,setSrcLanguage:t}},j=()=>{const[e,u]=a.useState([]);a.useEffect(()=>{g.getJudgeList().then(s=>{u(s.list)}).catch(s=>{console.log(s)})},[]);function r(){return e}return{getJudgeList:r}};export{j as a,p as b,h as u};