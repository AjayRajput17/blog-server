"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[667],{5667:function(e,t,s){s.r(t),s.d(t,{default:function(){return w}});var l=s(2791),n=s(9434),a=s(7689),i=s(9439),c=s(1087),o=s(6856),r=s(8617),m=s(7692),x=s(2006),d=s(7348),u=s(8174),f=s(5280),h=s(184),j=function(){var e,t,s=(0,n.v9)((function(e){return e.blog})).blogCommentsList;return(0,h.jsx)("div",{className:"w-full",children:null===s||void 0===s||null===(e=s.slice(0))||void 0===e||null===(t=e.reverse())||void 0===t?void 0:t.map((function(e){var t=null===e||void 0===e?void 0:e.user,s=t._id,l=t.name,n=t.imgUrl;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"my-6 w-full",children:[(0,h.jsx)(c.rU,{to:"/author/"+s,children:(0,h.jsxs)("section",{className:"flex flex-row items-center justify-start gap-2",children:[(0,h.jsx)("div",{className:"text-base text-white rounded-full",children:n?(0,h.jsx)("img",{src:n,alt:null===l||void 0===l?void 0:l.charAt(0),className:"w-8 h-8 rounded-full object-contain"}):(0,h.jsx)("span",{className:"bg-[#1A8917] hover:bg-[#105a0f] w-8 h-8 flex items-center justify-center rounded-full text-white font-medium text-base",children:null===l||void 0===l?void 0:l.charAt(0)})}),(0,h.jsx)("span",{className:"text-sm font-semibold mr-1",children:l})]})}),(0,h.jsx)("section",{className:"p-2 pl-10",dangerouslySetInnerHTML:{__html:e.comment}})]}),(0,h.jsx)("section",{className:"w-full h-[1px] bg-[#e9e6e6]"})]})}))})},v=s(6770),b=s.n(v),p={toolbar:[["bold","italic","underline"],["link"]],clipboard:{matchVisual:!1}},g=function(){var e=(0,n.v9)((function(e){return e.blog.blogDetails}))._id,t=(0,l.useState)(""),s=(0,i.Z)(t,2),a=s[0],c=s[1],o=(0,n.I0)();return(0,h.jsxs)("div",{id:"commentSection",className:"mb-6 flex flex-col items-start justify-normal gap-3",children:[(0,h.jsx)("span",{className:"px-1 font-medium text-2xl ",children:"Comments"}),(0,h.jsxs)("section",{className:"commentForm mt-3 mb-5 w-[100%] flex flex-col gap-3",children:[(0,h.jsx)(b(),{placeholder:"Add Comment",modules:p,theme:"snow",value:a,onChange:c}),(0,h.jsx)("button",{onClick:function(){o((0,x.C5)({blogId:e,comment:a})),c("")},className:"mx-auto w-20 px-4 py-2 bg-[#1A8917] hover:bg-[#127011] text-white font-medium text-base rounded-full border-none",children:"Post"})]}),(0,h.jsx)("span",{className:"px-1 text-base text-[#504f4f]",children:"Recent Comments"}),(0,h.jsx)("section",{className:"w-full h-[1px] bg-[#e9e6e6]"}),(0,h.jsx)(j,{})]})},N=function(){var e=(0,n.I0)(),t=(0,a.s0)(),s=(0,n.v9)((function(e){return e.blog})),j=s.blogDetails,v=s.loading,b=s.blogLikesNumber,p=s.blogCommentsList,N=(0,n.v9)((function(e){return e.auth})).userData,w=j._id,y=j.title,k=j.content,C=j.createdAt,A=j.author,_=j.tags,L=(j.likes,(0,l.useState)(!1)),U=(0,i.Z)(L,2),I=U[0],S=U[1];(0,l.useEffect)((function(){S((function(e){return null===b||void 0===b?void 0:b.includes(N._id)}))}),[b]),(0,l.useEffect)((function(){e((0,x.CT)())}),[]);var F=function(){t("/",{replace:!0}),e((0,x.L)())};return(0,h.jsx)("div",{className:"flex justify-center break-words",children:(0,h.jsx)("div",{className:" md:max-w-[52rem] relative mx-6 w-full",children:v?(0,h.jsx)(d.Z,{}):w?(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"flex flex-col items-start justify-normal my-12",children:[(0,h.jsxs)("section",{className:"w-full flex flex-row items-center justify-between",children:[(0,h.jsx)("h1",{className:"text-4xl font-bold w-[80%] mb-4",children:y}),(0,h.jsx)("div",{className:"flex items-center justify-start gap-3 text-2xl",children:(null===A||void 0===A?void 0:A._id)===(null===N||void 0===N?void 0:N._id)&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.LsQ,{onClick:function(){t("/edit-blog/".concat(w))},className:"cursor-pointer text-[#918e8e] hover:text-[#474444]"}),(0,h.jsx)(o.ZkW,{onClick:function(){e((0,x.X4)(w,F))},className:"cursor-pointer text-[#918e8e] hover:text-[#474444]"})]})})]}),(0,h.jsxs)("section",{className:"my-6 flex flex-row items-center justify-start gap-2",children:[(0,h.jsxs)(c.rU,{className:"flex items-center justify-start gap-2",to:"/author/"+(null===A||void 0===A?void 0:A._id),children:[(0,h.jsx)("div",{className:"text-base text-white rounded-full",children:null!==A&&void 0!==A&&A.imgUrl?(0,h.jsx)("img",{src:A.imgUrl,alt:null===A||void 0===A?void 0:A.name.charAt(0),className:"w-8 h-8 rounded-full object-contain"}):(null===A||void 0===A?void 0:A.name.charAt(0))&&(0,h.jsx)("span",{className:"bg-[#1A8917] hover:bg-[#105a0f] w-9 h-9 flex items-center justify-center rounded-full text-white font-medium text-base",children:null===A||void 0===A?void 0:A.name.charAt(0)})}),(0,h.jsx)("span",{className:"text-base font-semibold mx-1",children:null===A||void 0===A?void 0:A.name})]}),(0,h.jsx)("span",{className:"text-[#c4bebe]",children:"\u2022"}),(0,h.jsx)("span",{className:"text-sm text-[#585858]",children:null===C||void 0===C?void 0:C.split("T")[0]})]}),(0,h.jsx)("section",{className:"w-full h-[1px] bg-[#f0eeee]"}),(0,h.jsxs)("section",{className:"flex items-center justify-start gap-10 my-4 mx-4 ",children:[(0,h.jsxs)("section",{className:"flex items-center justify-start gap-2",children:[(0,h.jsx)("button",{onClick:function(){null!==N&&void 0!==N&&N.email?e((0,x.Mx)(w)):u.Am.info("Please Login")},className:"p-1",children:(0,h.jsx)(m.gew,{className:"".concat(I?" fill-black":"text-[#a19d9d]"," text-xl")})}),(0,h.jsx)("span",{className:"text-sm",children:b.length})]}),(0,h.jsxs)("section",{className:"flex items-center justify-start gap-2",children:[(0,h.jsx)(f.rU,{to:"commentSection",spy:!0,smooth:!0,duration:100,offset:-100,className:"p-1 cursor-pointer text-xl text-[#a19d9d] hover:text-black active:text-black focus:text-black group",activeClass:"text-black",children:(0,h.jsx)(o.VRI,{})}),(0,h.jsx)("span",{className:"text-sm",children:p.length})]})]}),(0,h.jsx)("section",{className:"w-full h-[1px] bg-[#f0eeee]"}),(0,h.jsx)("section",{className:"mx-2 my-10",dangerouslySetInnerHTML:{__html:k}}),(0,h.jsx)("section",{className:"flex items-center justify-start flex-wrap gap-2 w-[80%] h-auto mt-2 mb-2",children:null===_||void 0===_?void 0:_.map((function(e){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(c.rU,{to:"/topic/"+e,children:(0,h.jsx)("span",{className:"px-3 py-1 text-sm rounded-full bg-[#ecebeb] text-[#3b3a3a]",children:e})})})}))}),(0,h.jsx)("section",{className:"mt-14 w-full",children:(0,h.jsx)(g,{})})]})}):(0,h.jsx)("span",{className:" h-[400px] flex items-center justify-center text-[#585858] text-lg",children:"404 Not found"})})})},w=function(){var e=(0,a.UO)(),t=(0,n.I0)();return(0,l.useEffect)((function(){t((0,x.Gf)(e.id))}),[e.id]),(0,h.jsx)("div",{className:"block m-auto max-w-[1336px] h-auto",children:(0,h.jsx)(N,{})})}}}]);
//# sourceMappingURL=667.0475cbec.chunk.js.map