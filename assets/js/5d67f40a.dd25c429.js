"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5723],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(5773),a=(n(7378),n(5318));const o={sidebar_position:10,title:"Creating a pod",description:"Creating a pod from selected containers.",keywords:["podman desktop","podman","containers","pods"],tags:["pods"]},i="Creating a pod from selected containers",l={unversionedId:"getting-started/creating-a-pod",id:"getting-started/creating-a-pod",title:"Creating a pod",description:"Creating a pod from selected containers.",source:"@site/docs/getting-started/creating-a-pod.md",sourceDirName:"getting-started",slug:"/getting-started/creating-a-pod",permalink:"/docs/getting-started/creating-a-pod",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/getting-started/creating-a-pod.md",tags:[{label:"pods",permalink:"/docs/tags/pods"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Creating a pod",description:"Creating a pod from selected containers.",keywords:["podman desktop","podman","containers","pods"],tags:["pods"]},sidebar:"mySidebar",previous:{title:"Building an image",permalink:"/docs/getting-started/building-an-image"},next:{title:"Pushing an image to a registry",permalink:"/docs/getting-started/pushing-an-image-to-a-registry"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-a-pod-from-selected-containers"},"Creating a pod from selected containers"),(0,a.kt)("p",null,"With Podman Desktop, you can create a pod from your selected containers, and run the pod on the Podman container engine."),(0,a.kt)("p",null,"Consider running containers in a pod to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Expose your ",(0,a.kt)("inlineCode",{parentName:"li"},"frontend")," application to the public network."),(0,a.kt)("li",{parentName:"ol"},"Protect your ",(0,a.kt)("inlineCode",{parentName:"li"},"database")," container in a private network.")),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You are using the Podman container engine."),(0,a.kt)("li",{parentName:"ul"},"Your containers, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"database")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"frontend"),", running or stopped, are available on the Containers page."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"frontend")," container is configured to access the service exposed by the ",(0,a.kt)("inlineCode",{parentName:"li"},"database")," container on localhost, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:6379"),".")),(0,a.kt)("h4",{id:"procedure"},"Procedure"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cube",size:"lg"})," Containers"),"."),(0,a.kt)("li",{parentName:"ol"},"Click the checkbox in the container line for your containers, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"database")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"frontend"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cubes",size:"lg"})),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Copy containers to a pod")," screen:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Name of the pod"),": enter your pod name, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"my-pod"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"All selected ports will be exposed"),":",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"frontend"),"."),(0,a.kt)("li",{parentName:"ol"},"Clear ",(0,a.kt)("inlineCode",{parentName:"li"},"database"),"."))))),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cube",size:"lg"})," Create Pod"),".")),(0,a.kt)("h4",{id:"verification"},"Verification"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," Pods"),"."),(0,a.kt)("li",{parentName:"ol"},"Click your pod, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"my-pod"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Logs"),": see the combined logs from the two containers."),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Summary"),": see the containers."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"frontend-podified"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-external-link",size:"lg"})),"."),(0,a.kt)("li",{parentName:"ol"},"Your browser opens the service exposed by your ",(0,a.kt)("inlineCode",{parentName:"li"},"frontend-podified")," container."),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cube",size:"lg"})," Containers"),": see the running containers.")))}d.isMDXComponent=!0}}]);