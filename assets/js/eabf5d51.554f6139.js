"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5908],{5318:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var i=n(7378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=i.createContext({}),d=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=d(t.components);return i.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),m=d(n),g=a,w=m["".concat(s,".").concat(g)]||m[g]||c[g]||o;return n?i.createElement(w,l(l({ref:e},p),{},{components:n})):i.createElement(w,l({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r.mdxType="string"==typeof t?t:a,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3821:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(2685),a=(n(7378),n(5318));const o={sidebar_position:5,title:"Installing Podman Desktop with Winget",description:"Installing Podman Desktop on Windows with Winget",tags:["podman-desktop","installing","windows","winget"],keywords:["podman desktop","containers","podman","installing","installation","windows","winget"]},l="Installing Podman Desktop with Winget",r={unversionedId:"Installation/windows-install/installing-podman-desktop-with-winget",id:"Installation/windows-install/installing-podman-desktop-with-winget",title:"Installing Podman Desktop with Winget",description:"Installing Podman Desktop on Windows with Winget",source:"@site/docs/Installation/windows-install/installing-podman-desktop-with-winget.md",sourceDirName:"Installation/windows-install",slug:"/Installation/windows-install/installing-podman-desktop-with-winget",permalink:"/docs/Installation/windows-install/installing-podman-desktop-with-winget",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/Installation/windows-install/installing-podman-desktop-with-winget.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"installing",permalink:"/docs/tags/installing"},{label:"windows",permalink:"/docs/tags/windows"},{label:"winget",permalink:"/docs/tags/winget"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Installing Podman Desktop with Winget",description:"Installing Podman Desktop on Windows with Winget",tags:["podman-desktop","installing","windows","winget"],keywords:["podman desktop","containers","podman","installing","installation","windows","winget"]},sidebar:"tutorialSidebar",previous:{title:"Installing Podman Desktop with Scoop",permalink:"/docs/Installation/windows-install/installing-podman-desktop-with-scoop"},next:{title:"Installing Podman on Windows",permalink:"/docs/Installation/windows-install/installing-podman-with-podman-desktop"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Additional resources",id:"additional-resources",level:4},{value:"Next steps",id:"next-steps",level:4}],p={toc:d};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-podman-desktop-with-winget"},"Installing Podman Desktop with Winget"),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/getwinget"},"Winget Package manager for Windows"))),(0,a.kt)("h4",{id:"procedure"},"Procedure"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run the command from the command line or from PowerShell:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"winget install -e --id RedHat.Podman-Desktop\n")))),(0,a.kt)("h4",{id:"additional-resources"},"Additional resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://winget.run/pkg/RedHat/Podman-Desktop"},"Podman Desktop Winget package"))),(0,a.kt)("h4",{id:"next-steps"},"Next steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"installing-podman-with-podman-desktop"},"Installing Podman")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/getting-started/getting-started"},"Getting Started with Podman Desktop"))))}c.isMDXComponent=!0}}]);