"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[482],{7927:function(e,t,s){s.d(t,{Z:function(){return h}});var l=s(1413),n=s(2791),a=s(9434),i=s(9439),r=s(7692),c=s(1087);s.p;var o=s(2006),u=s(8174),d=s(184),x=function(e){var t,s=e._id,l=e.title,x=e.content,m=e.createdAt,f=e.author,h=e.tags,j=void 0===h?null:h,v=(0,a.I0)(),g=null!==(t=x)&&""!==t&&(t=t.toString()).replace(/(<([^>]+)>)/gi,""),b=(0,a.v9)((function(e){return e.auth.userData})).email,p=(0,a.v9)((function(e){return e.blog})),N=p.bookmarkedBlogsId,w=(p.bookmarkedBlogs,(0,n.useState)(!1)),y=(0,i.Z)(w,2),k=y[0],I=y[1];(0,n.useEffect)((function(){I((function(e){return N.includes(s)}))}),[N]);return(0,d.jsxs)("article",{className:"relative w-full",children:[(0,d.jsx)("button",{onClick:function(){b?v((0,o.rv)(s)):u.Am.info("Please Login")},className:"group p-1 absolute bottom-0 right-0",children:(0,d.jsx)(r.Ins,{className:"".concat(k?"text-[#1A8917] stroke-none":"text-white"," stroke-1 w-5 h-5 stroke-[#585858]")})}),(0,d.jsxs)("div",{className:"flex flex-col items-start justify-start gap-4",children:[(0,d.jsx)(c.rU,{to:"/author/"+(null===f||void 0===f?void 0:f._id),children:(0,d.jsxs)("section",{className:"flex flex-row items-center justify-start gap-2",children:[(0,d.jsx)("div",{className:"text-base text-white rounded-full",children:null!==f&&void 0!==f&&f.imgUrl?(0,d.jsx)("img",{src:null===f||void 0===f?void 0:f.imgUrl,alt:null===f||void 0===f?void 0:f.name.charAt(0),className:"w-8 h-8 rounded-full object-contain"}):(0,d.jsx)("span",{className:"bg-[#1A8917] hover:bg-[#105a0f] w-8 h-8 flex items-center justify-center rounded-full text-white font-medium text-base",children:null===f||void 0===f?void 0:f.name.charAt(0)})}),(0,d.jsx)("span",{className:"text-sm font-semibold mr-1",children:f.name}),(0,d.jsx)("span",{className:"text-[#c4bebe]",children:"\u2022"}),(0,d.jsx)("span",{className:"text-sm text-[#585858]",children:m.split("T")[0]})]})}),(0,d.jsx)(c.rU,{to:"/blog/"+s,className:"w-full",children:(0,d.jsx)("section",{className:"flex items-center justify-between",children:(0,d.jsxs)("section",{className:"flex flex-col items-start justify-start gap-2 mb-2",children:[(0,d.jsx)("h1",{className:"text-xl font-semibold",children:l}),(0,d.jsx)("div",{className:"line-clamp-3 text-base font-normal",children:g})]})})}),(0,d.jsx)("section",{className:"flex items-center justify-start flex-wrap gap-2 w-[80%] h-auto mt-2 mb-2",children:null===j||void 0===j?void 0:j.map((function(e){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(c.rU,{to:"/topic/"+e,children:(0,d.jsx)("span",{className:"px-3 py-1 text-sm rounded-full bg-[#ecebeb] text-[#3b3a3a]",children:e})})})}))})]})]})},m=s(6856),f=s(7348),h=function(e){var t=e.blogsData,s=e.callback,n=t.blogsList,i=t.totalPages,r=t.currentPage,c=(0,a.v9)((function(e){return e.blog})).loading;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("main",{className:"mt-10 relative mb-10 mx-4 flex-auto md:min-w-[500px] md:max-w-[768px] flex flex-col items-start justify-start gap-6",children:[c&&(0,d.jsx)(f.Z,{}),n.length>0?(0,d.jsxs)(d.Fragment,{children:[null===n||void 0===n?void 0:n.map((function(e,t){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(x,(0,l.Z)({},e),e._id),(0,d.jsx)("div",{className:"w-full h-[1px] bg-[#f0eeee]"})]})})),i>r&&(0,d.jsxs)("button",{onClick:function(){i>r&&s()},className:"mx-auto px-2 flex flex-col items-center justify-center text-slate-600 hover:text-[#1f83aa]",children:[(0,d.jsx)(m.fMh,{className:"text-2xl"}),(0,d.jsx)("div",{className:"flex items-center justify-center text-sm font-medium",children:"Show More"})]})]}):(0,d.jsx)("div",{className:"w-full flex flex-col justify-start items-start text-base font-medium text-[#585858]",children:!c&&(0,d.jsx)("span",{children:"No Blog"})})]})})}},6759:function(e,t,s){s.r(t);var l=s(2791),n=s(9434),a=s(7689),i=s(7927),r=s(2006),c=s(184);t.default=function(e){var t,s,o,u=e.type,d=(0,a.UO)(),x=(0,n.I0)(),m=(0,n.v9)((function(e){return e.blog})).userPublishedBlogs,f=(0,n.v9)((function(e){return e.auth.userData}))._id;(0,l.useEffect)((function(){x(1===u?(0,r.ay)({userId:f}):(0,r.ay)({userId:d.id}))}),[d.id,u,f]);return(0,c.jsxs)("div",{className:"p-14 flex flex-col items-start justify-start gap-4",children:[(0,c.jsx)("section",{className:"w-full flex items-center justify-between",children:(0,c.jsx)("h1",{className:"font-semibold tracking-wider text-3xl text-[#333131]",children:1===u?"My Blogs":"".concat((null===m||void 0===m||null===(t=m.blogsList)||void 0===t||null===(s=t[0])||void 0===s||null===(o=s.author)||void 0===o?void 0:o.name)||"User","'s Blogs")})}),(0,c.jsx)("div",{className:"w-full h-[1px] bg-[#f0eeee] mt-6"}),(0,c.jsx)("div",{className:"flex justify-start w-full",children:(0,c.jsx)(i.Z,{blogsData:m,callback:function(){x(1===u?(0,r.ay)({userId:f,page:(null===m||void 0===m?void 0:m.currentPage)+1}):(0,r.ay)({userId:d.id,page:(null===m||void 0===m?void 0:m.currentPage)+1}))}})})]})}}}]);
//# sourceMappingURL=482.a70cf4fc.chunk.js.map