import{e as u,r as C,k as b,o as p,c as i,l as $,u as _,w,b as e,t as y,m as F,h,p as A,F as x,q as v,n as E,s as g,d as k,a as B}from"./app.ee2846cb.js";import{u as T}from"./chunks/index.7c808dae.js";import"./chunks/index.454f23dd.js";const S=["data-active","onDragenter","onDragover","onDragleave","onDrop"],N=u({__name:"DropZone",emits:["drop"],setup(l,{emit:n}){let s=C(!1),o=null;const a=C();function c(){s.value=!0,o&&clearTimeout(o)}function t(){o=setTimeout(()=>{s.value=!1},50)}function r(d){var m,f;t();const D=[...(f=(m=d.dataTransfer)==null?void 0:m.files)!=null?f:[]];D.length>0&&n("drop",D)}return b(()=>["dragenter","dragover","dragleave","drop"].forEach(d=>T(a.value,d,D=>D.preventDefault()))),(d,D)=>(p(),i("div",{"data-active":_(s),onDragenter:w(c,["prevent"]),onDragover:w(c,["prevent"]),onDragleave:w(t,["prevent"]),onDrop:w(r,["prevent"])},[$(d.$slots,"default",{dropZoneActive:_(s)})],40,S))}}),V={class:"tw-flex tw-flex-col md:tw-flex-row tw-w-full tw-px-3 tw-py-2 tw-bg-gray-50 tw-border tw-rounded tw-justify-between tw-items-center md:tw-space-x-3"},j={class:"tw-font-medium tw-truncate shrink grow-0 tw-w-full tw-text-center md:tw-text-left"},R={class:"tw-flex tw-justify-between tw-space-x-2 tw-w-full md:tw-w-auto tw-mt-3 md:tw-mt-0"},I=e("span",{class:"material-symbols-rounded tw-text-xl"},"edit",-1),O=[I],P=e("span",{class:"material-symbols-rounded tw-text-xl"},"open_in_new",-1),U=[P],z=e("span",{class:"material-symbols-rounded tw-text-xl"},"download",-1),M=[z],Z=e("span",{class:"material-symbols-rounded tw-text-xl"},"delete",-1),L=[Z],q=u({__name:"UploadedFileRow",props:{file:null},emits:["open","download","delete","rename"],setup(l){return(n,s)=>(p(),i("div",V,[e("span",j,y(l.file.displayName),1),e("div",R,[e("div",{onClick:s[0]||(s[0]=o=>n.$emit("rename")),class:"tw-cursor-pointer hover:tw-text-blue-500 tw-text-gray-400"},O),e("div",{onClick:s[1]||(s[1]=o=>n.$emit("open")),class:"tw-cursor-pointer hover:tw-text-blue-500 tw-text-gray-400"},U),e("div",{onClick:s[2]||(s[2]=o=>n.$emit("download")),class:"tw-cursor-pointer hover:tw-text-blue-500 tw-text-gray-400"},M),e("div",{onClick:s[3]||(s[3]=o=>n.$emit("delete")),class:"tw-cursor-pointer hover:tw-text-red-500 tw-text-gray-400"},L)])]))}}),J={class:"tw-flex tw-flex-col md:tw-flex-row tw-w-full tw-px-3 tw-py-2 tw-bg-gray-50 tw-border tw-rounded tw-justify-between tw-items-center md:tw-space-x-3"},G={class:"tw-font-medium tw-truncate tw-max-w-[60%] tw-w-full tw-text-center md:tw-text-left"},H={class:"tw-flex tw-justify-between tw-space-x-2 tw-flex-1 tw-w-full md:tw-w-auto tw-mt-3 md:tw-mt-0 tw-items-center"},K={class:"tw-flex-1 tw-bg-gray-200 tw-rounded-full tw-h-1.5 tw-overflow-hidden"},Q={class:"tw-text-xs tw-text-gray-400"},W=e("span",{class:"material-symbols-rounded tw-text-xl"},"close",-1),X=[W],Y=u({__name:"UploadingFileRow",props:{file:null},emits:["abort"],setup(l){return(n,s)=>(p(),i("div",J,[e("span",G,y(l.file.name),1),e("div",H,[e("div",K,[e("div",{class:"tw-bg-blue-600 tw-h-1.5",style:F(`width: ${l.file.percentage()}%`)},null,4)]),e("span",Q,y(`${l.file.percentage()}%`),1),e("div",{onClick:s[0]||(s[0]=o=>n.$emit("abort")),class:"tw-cursor-pointer hover:tw-text-red-500 tw-text-gray-400"},X)])]))}}),ee={class:"tw-flex tw-flex-col tw-w-full tw-space-y-3"},se=e("span",{class:"tw-text-base tw-leading-normal tw-py-4 tw-flex tw-flex-col tw-space-y-2 tw-items-center tw-text-center"},[e("span",null,[e("span",{class:"tw-text-blue-500 tw-font-medium hover:tw-text-blue-700"},"Click to upload"),k(" or drag and drop")]),e("span",{class:"tw-text-gray-400 tw-text-xs"},"500 MB max file size.")],-1),te={class:"tw-flex tw-flex-col tw-w-full tw-space-y-3"},ne=u({__name:"BaseFile",props:{uploadedFiles:{default:[]},uploadingFiles:{default:[]}},emits:["open","download","delete","rename","abort","upload"],setup(l,{emit:n}){function s(a){n("upload",a)}function o(a){var t,r;const c=[...(r=(t=a.target)==null?void 0:t.files)!=null?r:[]];c.length>0&&s(c)}return(a,c)=>(p(),i("div",ee,[h(N,{onDrop:s},{default:A(({dropZoneActive:t})=>[e("label",{class:E(["tw-w-full tw-flex tw-flex-col tw-items-center tw-border tw-border-gray-300 tw-rounded tw-border-dashed hover:tw-border-solid tw-cursor-pointer",{"tw-bg-blue-50":t}])},[se,e("input",{onChange:o,type:"file",class:"tw-hidden",multiple:""},null,32)],2)]),_:1}),e("div",te,[(p(!0),i(x,null,v(l.uploadingFiles,t=>(p(),g(Y,{key:t.id,file:t,onAbort:r=>a.$emit("abort",t)},null,8,["file","onAbort"]))),128)),(p(!0),i(x,null,v(l.uploadedFiles,t=>(p(),g(q,{key:t.id,file:t,onOpen:r=>a.$emit("open",t),onDownload:r=>a.$emit("download",t),onDelete:r=>a.$emit("delete",t),onRename:r=>a.$emit("rename",t)},null,8,["file","onOpen","onDownload","onDelete","onRename"]))),128))])]))}}),ae=B("",4),ie=JSON.parse('{"title":"File","description":"","frontmatter":{},"headers":[],"relativePath":"ui/file.md"}'),le={name:"ui/file.md"},ce=Object.assign(le,{setup(l){return(n,s)=>(p(),i("div",null,[ae,h(ne,{"uploaded-files":[{id:"1",name:"Bader CV.pdf",displayName:"Bader"},{id:"2",name:"Saba CV.pdf",displayName:"Saba"}],"uploading-files":[{id:"1",name:"Bader CV.pdf",percentage:()=>33}]},null,8,["uploaded-files","uploading-files"])]))}});export{ie as __pageData,ce as default};
