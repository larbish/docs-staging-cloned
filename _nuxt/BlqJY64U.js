import{a7 as b,d as B,a9 as k,ah as I,ai as S,i as m,z as f,w as r,B as e,aF as H,A as C,f as T,g as O,n as i,aG as U,H as z,aI as L,a8 as P,y as N,e as h,t as v,aw as x,ad as V}from"./DDYmkc13.js";import{r as j}from"./DQcO5iZH.js";import"./BmlbPuZL.js";const A={slots:{root:"",content:"data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden"}},D=P;var $;const F=b({extend:b(A),...(($=D.ui)==null?void 0:$.collapsible)||{}}),E=B({__name:"Collapsible",props:{as:{},class:{},ui:{},defaultOpen:{type:Boolean},open:{type:Boolean},disabled:{type:Boolean},unmountOnHide:{type:Boolean,default:!0}},emits:["update:open"],setup(d,{emit:a}){const t=d,o=a,s=k(),_=I(S(t,"as","defaultOpen","open","disabled","unmountOnHide"),o),c=F();return(p,g)=>{var n;return m(),f(e(L),z(e(_),{class:e(c).root({class:[t.class,(n=t.ui)==null?void 0:n.root]})}),{default:r(({open:u})=>{var l;return[s.default?(m(),f(e(H),{key:0,"as-child":""},{default:r(()=>[C(p.$slots,"default",{open:u})]),_:2},1024)):T("",!0),O(e(U),{class:i(e(c).content({class:(l=t.ui)==null?void 0:l.content}))},{default:r(()=>[C(p.$slots,"content")]),_:3},8,["class"])]}),_:3},16,["class"])}}}),G=Object.assign(E,{__name:"UCollapsible"}),q={slots:{base:"",trigger:["group relative rounded-[calc(var(--ui-radius)/2)] inline-flex items-center gap-1.5 text-[var(--ui-text-muted)] hover:text-[var(--ui-text)] text-sm focus-visible:ring-2 focus-visible:ring-[var(--ui-primary)] focus:outline-none","transition-colors"],triggerIcon:"size-4 shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",triggerLabel:"truncate"}},J=P;var w,y;const K=x({extend:x(q),...((y=(w=J.uiPro)==null?void 0:w.prose)==null?void 0:y.collapsible)||{}}),M=B({__name:"Collapsible",props:{icon:{},name:{default:"properties"},openText:{default:"Show"},closeText:{default:"Hide"},class:{},ui:{}},setup(d){const a=d,t=N(),o=K();return(s,_)=>{const c=V,p=G;return m(),f(p,{"unmount-on-hide":!1,class:i(e(o).base({class:a.class}))},{default:r(({open:g})=>{var n,u,l;return[h("button",{class:i(e(o).trigger({class:(n=a.ui)==null?void 0:n.trigger}))},[O(c,{name:s.icon||e(t).ui.icons.chevronDown,class:i(e(o).triggerIcon({class:(u=a.ui)==null?void 0:u.triggerIcon}))},null,8,["name","class"]),h("span",{class:i(e(o).triggerLabel({class:(l=a.ui)==null?void 0:l.triggerLabel}))},v(g?s.closeText:s.openText)+" "+v(s.name),3)],2)]}),content:r(()=>[j(s.$slots,"default",{mdcUnwrap:"p"})]),_:3},8,["class"])}}}),X=Object.assign(M,{__name:"ProseCollapsible"});export{X as default};
