import{u as $,r,s as G,a as Q,j as l,b as e,D as Z,m as _,n as ee,k as w}from"./index-f53292e5.js";import{d as te}from"./index-9444243e.js";import{S as ae}from"./sweetalert2.all-4eb2d60e.js";import{I as D}from"./IconPlus-4816416c.js";import{I as le}from"./IconPlusCircle-ef87ab10.js";import{I as se}from"./IconHorizontalDots-34732cb9.js";import{I as E}from"./IconTag-6bb265a6.js";import{I as M}from"./IconTrashLines-c588f9d3.js";import{Y as m,y as h}from"./transition-2ffeb922.js";import"./keyboard-b937560b.js";import"./open-closed-31183928.js";import"./hidden-9ae8f159.js";const be=()=>{const L=$();r.useEffect(()=>{L(G("Scrumboard"))});const[o,C]=r.useState([{id:1,title:"In Progress",tasks:[{projectId:1,id:1,title:"Creating a new Portfolio on Dribble",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",image:!0,date:" 08 Aug, 2020",tags:["designing"]},{projectId:1,id:2,title:"Singapore Team Meet",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",date:" 09 Aug, 2020",tags:["meeting"]}]},{id:2,title:"Pending",tasks:[{projectId:2,id:3,title:"Plan a trip to another country",description:"",date:" 10 Sep, 2020"}]},{id:3,title:"Complete",tasks:[{projectId:3,id:4,title:"Dinner with Kelly Young",description:"",date:" 08 Aug, 2020"},{projectId:3,id:5,title:"Launch New SEO Wordpress Theme ",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",date:" 09 Aug, 2020"}]},{id:4,title:"Working",tasks:[]}]),z=Q(t=>t.themeConfig.rtlClass)==="rtl",J=t=>{const{value:a,id:s}=t.target;N({...c,[s]:a})},[c,N]=r.useState({id:null,title:""}),[i,f]=r.useState({projectId:null,id:null,title:"",description:"",tags:"",date:""}),[T,O]=r.useState(null),[I,g]=r.useState(!1),[S,b]=r.useState(!1),[j,v]=r.useState(!1),F=(t=null)=>{setTimeout(()=>{if(N({id:null,title:""}),t){let a=JSON.parse(JSON.stringify(t));N(a)}g(!0)})},u=(t="",a="success")=>{ae.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:a,title:t,padding:"10px 20px"})},Y=()=>{if(!c.title)return u("Title is required.","error"),!1;if(c.id){const t=o.find(a=>a.id===c.id);t.title=c.title}else{const a={id:(o.reduce((s,d)=>d.id>s?d.id:s,o[0].id)||0)+1,title:c.title,tasks:[]};o.push(a)}u("Project has been saved successfully."),g(!1)},q=t=>{C(o.filter(a=>a.id!==t.id)),u("Project has been deleted successfully.")},R=t=>{f(t.tasks=[])},x=t=>{const{value:a,id:s}=t.target;f({...i,[s]:a})},k=(t,a=null)=>{if(f({projectId:t,id:null,title:"",description:"",tags:"",date:""}),a){let s=JSON.parse(JSON.stringify(a));s.projectId=t,s.tags=s.tags?s.tags.toString():"",f(s)}b(!0)},U=()=>{var a,s,d;if(!i.title)return u("Title is required.","error"),!1;const t=o.find(n=>n.id===i.projectId);if(i.id){const n=t.tasks.find(p=>p.id===i.id);n.title=i.title,n.description=i.description,n.tags=((a=i.tags)==null?void 0:a.length)>0?i.tags.split(","):[]}else{let n=0;n=(s=t.tasks)!=null&&s.length?t.tasks.reduce((P,A)=>A.id>P?A.id:P,t.tasks[0].id):0;const p=new Date,y=String(p.getDate()).padStart(2,"0"),H=String(p.getMonth()),K=p.getFullYear(),V=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],X={projectId:i.projectId,id:n+1,title:i.title,description:i.description,date:y+" "+V[H]+", "+K,tags:((d=i.tags)==null?void 0:d.length)>0?i.tags.split(","):[]};f(t.tasks.push(X))}u("Task has been saved successfully."),b(!1)},W=(t,a=null)=>{O(a),setTimeout(()=>{v(!0)},10)},B=()=>{let t=o.find(a=>a.id===T.projectId);t.tasks=t.tasks.filter(a=>a.id!==T.id),u("Task has been deleted successfully."),v(!1)};return l("div",{children:[e("div",{children:l("button",{type:"button",className:"btn btn-primary flex",onClick:()=>{F()},children:[e(D,{className:"w-5 h-5 ltr:mr-3 rtl:ml-3"}),"Add Project"]})}),e("div",{className:"relative pt-5",children:e("div",{className:"perfect-scrollbar h-full -mx-2",children:e("div",{className:"overflow-x-auto flex items-start flex-nowrap gap-5 pb-2 px-2",children:o.map(t=>l("div",{className:"panel w-80 flex-none","data-group":t.id,children:[l("div",{className:"flex justify-between mb-5",children:[e("h4",{className:"text-base font-semibold",children:t.title}),l("div",{className:"flex items-center",children:[e("button",{onClick:()=>k(t.id),type:"button",className:"hover:text-primary ltr:mr-2 rtl:ml-2",children:e(le,{})}),e("div",{className:"dropdown",children:e(Z,{offset:[0,5],placement:`${z?"bottom-start":"bottom-end"}`,button:e(se,{className:"opacity-70 hover:opacity-100"}),children:l("ul",{children:[e("li",{children:e("button",{type:"button",onClick:()=>F(t),children:"Edit"})}),e("li",{children:e("button",{type:"button",onClick:()=>q(t),children:"Delete"})}),e("li",{children:e("button",{type:"button",onClick:()=>R(t),children:"Clear All"})})]})})})]})]}),e(te.ReactSortable,{list:t.tasks,setList:(a,s)=>{var d;if(s){const n=((d=s.el.closest("[data-group]"))==null?void 0:d.getAttribute("data-group"))||0,p=o.map(y=>(parseInt(y.id)===parseInt(n)&&(y.tasks=a),y));C(p)}},animation:200,group:{name:"shared",pull:!0,put:!0},ghostClass:"sortable-ghost",dragClass:"sortable-drag",className:"connect-sorting-content min-h-[150px]",children:t.tasks.map(a=>{var s;return e("div",{className:"sortable-list ",children:l("div",{className:"shadow bg-[#f4f4f4] dark:bg-white-dark/20 p-3 pb-5 rounded-md mb-5 space-y-3 cursor-move",children:[a.image?e("img",{src:"/assets/images/carousel1.jpeg",alt:"images",className:"h-32 w-full object-cover rounded-md"}):"",e("div",{className:"text-base font-medium",children:a.title}),e("p",{className:"break-all",children:a.description}),e("div",{className:"flex gap-2 items-center flex-wrap",children:(s=a.tags)!=null&&s.length?a.tags.map((d,n)=>l("div",{className:"btn px-2 py-1 flex btn-outline-primary",children:[e(E,{className:"shrink-0"}),e("span",{className:"ltr:ml-2 rtl:mr-2",children:d})]},n)):l("div",{className:"btn px-2 py-1 flex text-white-dark dark:border-white-dark/50 shadow-none",children:[e(E,{className:"shrink-0"}),e("span",{className:"ltr:ml-2 rtl:mr-2",children:"No Tags"})]})}),l("div",{className:"flex items-center justify-between",children:[l("div",{className:"font-medium flex items-center hover:text-primary",children:[e(_,{className:"ltr:mr-3 rtl:ml-3 shrink-0"}),e("span",{children:a.date})]}),l("div",{className:"flex items-center",children:[e("button",{onClick:()=>k(t.id,a),type:"button",className:"hover:text-info",children:e(ee,{className:"ltr:mr-3 rtl:ml-3"})}),e("button",{onClick:()=>W(t.id,a),type:"button",className:"hover:text-danger",children:e(M,{})})]})]})]})},t.id+""+a.id)})}),e("div",{className:"pt-3",children:l("button",{type:"button",className:"btn btn-primary mx-auto",onClick:()=>k(t.id),children:[e(D,{}),"Add Task"]})})]},t.id))})})}),e(m,{appear:!0,show:I,as:r.Fragment,children:l(h,{as:"div",open:I,onClose:()=>g(!1),className:"relative z-[51]",children:[e(m.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-[black]/60"})}),e("div",{className:"fixed inset-0 z-[999] px-4 overflow-y-auto",children:e("div",{className:"flex items-center justify-center min-h-screen",children:e(m.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:l(h.Panel,{className:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark",children:[e("button",{type:"button",onClick:()=>g(!1),className:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",children:e(w,{})}),e("div",{className:"text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]",children:c.id?"Edit Project":"Add Project"}),e("div",{className:"p-5",children:l("form",{onSubmit:Y,children:[e("div",{className:"grid gap-5",children:l("div",{children:[e("label",{htmlFor:"title",children:"Name"}),e("input",{id:"title",value:c.title,onChange:J,type:"text",className:"form-input mt-1",placeholder:"Enter Name"})]})}),l("div",{className:"flex justify-end items-center mt-8",children:[e("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>g(!1),children:"Cancel"}),e("button",{type:"submit",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:c.id?"Update":"Add"})]})]})})]})})})})]})}),e(m,{appear:!0,show:S,as:r.Fragment,children:l(h,{as:"div",open:S,onClose:()=>b(!1),className:"relative z-50",children:[e(m.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-[black]/60"})}),e("div",{className:"fixed inset-0 z-[999] overflow-y-auto",children:e("div",{className:"flex items-center justify-center min-h-screen px-4",children:l(h.Panel,{className:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark",children:[e("button",{onClick:()=>b(!1),type:"button",className:"absolute top-4 ltr:right-4 rtl:left-4 text-white-dark hover:text-dark",children:e(w,{})}),e("div",{className:"text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]",children:i.id?"Edit Task":"Add Task"}),e("div",{className:"p-5",children:l("form",{onSubmit:U,children:[l("div",{className:"grid gap-5",children:[l("div",{children:[e("label",{htmlFor:"taskTitle",children:"Name"}),e("input",{id:"title",value:i.title,onChange:x,type:"text",className:"form-input",placeholder:"Enter Name"})]}),l("div",{children:[e("label",{htmlFor:"taskTag",children:"Tag"}),e("input",{id:"tags",value:i.tags,onChange:x,type:"text",className:"form-input",placeholder:"Enter Tag"})]}),l("div",{children:[e("label",{htmlFor:"taskdesc",children:"Description"}),e("textarea",{id:"description",value:i.description,onChange:x,className:"form-textarea min-h-[130px]",placeholder:"Enter Description"})]})]}),l("div",{className:"flex justify-end items-center mt-8",children:[e("button",{onClick:()=>b(!1),type:"button",className:"btn btn-outline-danger",children:"Cancel"}),e("button",{type:"submit",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:i.id?"Update":"Add"})]})]})})]})})})]})}),e(m,{appear:!0,show:j,as:r.Fragment,children:l(h,{as:"div",open:j,onClose:()=>v(!1),className:"relative z-[51]",children:[e(m.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-[black]/60"})}),e("div",{className:"fixed inset-0 z-[999] overflow-y-auto",children:e("div",{className:"flex items-center justify-center min-h-screen px-4 ",children:e(m.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:l(h.Panel,{className:"panel border-0 p-0 rounded-lg overflow-hidden md:w-full max-w-lg w-[90%] my-8",children:[e("button",{type:"button",onClick:()=>{v(!1)},className:"absolute top-4 ltr:right-4 rtl:left-4 text-white-dark",children:e(w,{})}),e("div",{className:"text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]",children:"Delete Task"}),l("div",{className:"p-5 text-center",children:[e("div",{className:"text-white bg-danger ring-4 ring-danger/30 p-4 rounded-full w-fit mx-auto",children:e(M,{})}),e("div",{className:"text-base sm:w-3/4 mx-auto mt-5",children:"Are you sure you want to delete Task?"}),l("div",{className:"flex justify-center items-center mt-8",children:[e("button",{onClick:()=>{v(!1)},type:"button",className:"btn btn-outline-danger",children:"Cancel"}),e("button",{onClick:B,type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Delete"})]})]})]})})})})]})})]})};export{be as default};
