import{r as a,j as e,a as o,F as y}from"./index-b8aa1f0f.js";import{G as i,u as _,f as j,a as F,v as G,b as L}from"./config-0dec938c.js";import{u as O,R}from"./react-paginate-1b76d116.js";const l=25,A=()=>{const[f,m]=a.useState(0),[p,h]=a.useState(0),[r,x]=a.useState(0),[S,P]=a.useState(""),[b,d]=a.useState(i.getStickers(r)),c=O(S,500),C=s=>{P(s.target.value)};a.useEffect(()=>{d(c?i.getSearchSticker(c,r):i.getStickers(r))},[c,r]);const{data:t,error:v}=_(b,j),g=!t&&!v,u=(t==null?void 0:t.data)||[],n=(t==null?void 0:t.pagination)||[];a.useEffect(()=>{!n||!n.total_count||m(Math.ceil(n.total_count/l))},[n,p]);const N=s=>{const k=s.selected*l%n.total_count;h(k),x(w=>w+25)};return e("section",{className:"pt-24",children:o("div",{className:"page-container",children:[o("div",{className:"flex flex-col md:flex-row items-center gap-4",children:[e("input",{onChange:C,className:"w-full bg-gradientColor_9 p-4 rounded-md placeholder-white",type:"text",placeholder:"Search your sickers..."}),e("span",{className:"bg-gradientColor_4 btn-shinny-1 w-full md:w-fit flex items-center justify-center font-medium  p-4 cursor-pointer rounded-md",children:"Search"})]}),o("div",{className:"mt-10 mb-32 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",children:[g&&e(y,{children:new Array(l).fill(0).map(()=>e(F,{},G()))}),!g&&u.length>0&&u.map(s=>e(L,{item:s},s.id))]}),e("div",{className:"my-10",children:e(R,{breakLabel:"...",nextLabel:"next >",onPageChange:N,pageRangeDisplayed:5,pageCount:f,previousLabel:"< previous",renderOnZeroPageCount:null,className:"pagination"})})]})})};export{A as default};
