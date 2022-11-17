"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6778],{5318:(e,o,t)=>{t.d(o,{Zo:()=>m,kt:()=>u});var n=t(7378);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var o=n.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):r(r({},o),e)),t},m=function(e){var o=l(e.components);return n.createElement(p.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},d=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return t?n.createElement(h,r(r({ref:o},m),{},{components:t})):n.createElement(h,r({ref:o},m))}));function u(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var s={};for(var p in o)hasOwnProperty.call(o,p)&&(s[p]=o[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1806:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(2685),a=(t(7378),t(5318));const i={title:"Using Compose with Podman Desktop"},r=void 0,s={unversionedId:"podman-compose",id:"podman-compose",title:"Using Compose with Podman Desktop",description:"Introduction",source:"@site/docs/podman-compose.md",sourceDirName:".",slug:"/podman-compose",permalink:"/docs/podman-compose",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/podman-compose.md",tags:[],version:"current",frontMatter:{title:"Using Compose with Podman Desktop"},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},p={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:2},{value:"1. Podman Desktop",id:"1-podman-desktop",level:3},{value:"2. Podman Compose",id:"2-podman-compose",level:3},{value:"Get Started",id:"get-started",level:2},{value:"1. Install Podman Compose",id:"1-install-podman-compose",level:3},{value:"For macOS",id:"for-macos",level:4},{value:"For Windows and Linux",id:"for-windows-and-linux",level:4},{value:"2. Using Podman Compose to run multiple containers",id:"2-using-podman-compose-to-run-multiple-containers",level:3},{value:"3. Manage Compose with Podman Desktop",id:"3-manage-compose-with-podman-desktop",level:3},{value:"Conclusion",id:"conclusion",level:2}],m={toc:l};function c(e){let{components:o,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Podman Desktop is aimed at providing an amazing graphical experience of managing your containers. Developers who have worked on containers may also be fans of the ",(0,a.kt)("a",{parentName:"p",href:"https://compose-spec.io/"},"Compose Spec"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-compose#readme"},"Podman Compose")," is a community-driven tool that allows developers to run multiple containers at the same time and facilitate communication between them. Podman Compose requires a ",(0,a.kt)("a",{parentName:"p",href:"https://compose-spec.io/"},"Compose YAML")," file with definitions about the containers that need to communicate."),(0,a.kt)("p",null,"If you are new to writing ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/compose-spec/compose-spec/blob/master/spec.md#compose-file"},"Compose files")," or ",(0,a.kt)("a",{parentName:"p",href:"https://compose-spec.io/"},"Compose Spec"),", check out ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/compose-spec/compose-spec/blob/master/spec.md"},"this guide")," for more information. "),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("h3",{id:"1-podman-desktop"},"1. Podman Desktop"),(0,a.kt)("p",null,"Get the latest version of Podman Desktop by clicking ",(0,a.kt)("a",{parentName:"p",href:"/downloads"},"here"),". Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/installation"},"installation guide")," for more information."),(0,a.kt)("h3",{id:"2-podman-compose"},"2. Podman Compose"),(0,a.kt)("h2",{id:"get-started"},"Get Started"),(0,a.kt)("p",null,"In this tutorial, we will learn about working with containers on Podman Desktop generated using ",(0,a.kt)("inlineCode",{parentName:"p"},"podman-compose"),". You can find more information about Podman Compose ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-compose/blob/devel/README.md"},"here"),". "),(0,a.kt)("h3",{id:"1-install-podman-compose"},"1. Install Podman Compose"),(0,a.kt)("h4",{id:"for-macos"},"For macOS"),(0,a.kt)("p",null,"There are many ways to install ",(0,a.kt)("inlineCode",{parentName:"p"},"podman-compose")," on your macOS system. One of the easier ways is to use Homebrew. To install ",(0,a.kt)("inlineCode",{parentName:"p"},"podman-compose"),", simply run the following command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew install podman-compose\n")),(0,a.kt)("p",null,"To ensure ",(0,a.kt)("inlineCode",{parentName:"p"},"podman-compose")," is properly installed, run the command: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"podman-compose\n")),(0,a.kt)("p",null,"and it will return more information about its usage."),(0,a.kt)("h4",{id:"for-windows-and-linux"},"For Windows and Linux"),(0,a.kt)("p",null,"Refer the official ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-compose#installation"},"installation guide")," to get the latest version of Podman Compose on your Windows or Linux system. "),(0,a.kt)("h3",{id:"2-using-podman-compose-to-run-multiple-containers"},"2. Using Podman Compose to run multiple containers"),(0,a.kt)("p",null,"For this tutorial, we will use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/docker/awesome-compose/tree/master/flask-redis"},"flask-redis project")," from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/docker/awesome-compose"},"awesome-compose repository"),". This repository consists of many sample projects for you to get started with Podman Compose. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open your Terminal window"),(0,a.kt)("li",{parentName:"ol"},"Change to the project directory ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd flask-redis\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run the following command ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"podman-compose -f compose.yaml up -d\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"compose.yaml")," file contains definitions for multiple containers within the ",(0,a.kt)("inlineCode",{parentName:"p"},"flask-redis")," project."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img1",src:t(7864).Z,width:"1282",height:"882"})),(0,a.kt)("h3",{id:"3-manage-compose-with-podman-desktop"},"3. Manage Compose with Podman Desktop"),(0,a.kt)("p",null,"In order to check if the containers are running as expected, open Podman Desktop and click on the \u2018Containers\u2019 option on the left side of the application. You will notice that the containers are bundled together under a Pod named ",(0,a.kt)("inlineCode",{parentName:"p"},"flask-redis (compose)")," in this case. Here, the compose within the bracket indicates that it is generated from a Compose YAML file. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img2",src:t(9761).Z,width:"1999",height:"1103"})),(0,a.kt)("p",null,"You can further configure or work with these containers within the Podman Desktop application now that they are visible. Here, clicking on the \u2018Open Browser\u2019 button allows us to check if the application is running as expected. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img3",src:t(9459).Z,width:"1999",height:"877"})),(0,a.kt)("p",null,"You can do much more such as checking logs, opening the terminal or inspecting the files for more details."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img4",src:t(5210).Z,width:"1999",height:"1103"})),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"That is it. This is how you can use Podman Desktop for your containers generated through podman-compose. It will be really exciting to see you all developers leverage these compatibilities to build exciting applications using Podman Desktop!"))}c.isMDXComponent=!0},7864:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/compose_doc_image_1-79ba096000581d2067cd2fbc31c7d20f.png"},9761:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/compose_doc_image_2-fd0c6791568797c6a5670c72e53687ca.png"},9459:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/compose_doc_image_3-50808a5d4b1e003e5979c3d50a1e0e1c.png"},5210:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/compose_doc_image_4-b6ef9b2966e93143a04e6118e83d7101.png"}}]);