import{e as r}from"./index-IHb8sIfT.js";var i;(a=>{async function p(t){let e=await r.get(`/api/v1/problem/${t}`);if(e.status!==200)throw Error("failed to get problem info");return e.data}a.getProblem=p;async function n(t){let e=await r.put("/api/v1/problem",t);if(e.status!==200)throw Error("failed to put problem");return e.data}a.putProblem=n;async function s(){let t=await r.get("/api/v1/problem");if(t.status!==200)throw Error("failed to get problem list");return t.data}a.getProblemInfoList=s;async function u(t,e){let o=new FormData;o.append("file",e);let l=await r.put(`/api/v1/problem/${t}/package`,o);if(l.status!==200)throw Error("failed to put problem package");return l.data}a.putProblemPackage=u;async function m(t){return(await r.get(`/api/v1/problem/${t}/check`)).data}a.checkProblemSlug=m;async function f(t){if((await r.delete(`/api/v1/problem/${t}`)).status!==200)throw Error("failed to delete problem")}a.deleteProblem=f})(i||(i={}));export{i as P};