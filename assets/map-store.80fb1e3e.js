import{a4 as n}from"./index.03dccc7c.js";const m=n("store",{state:()=>({counter:0,storeValue:"store value string",dataLoading:![],mapLoadStartTime:null,mapLoadFinishTime:null,mapLoadTime:0,mapZoom:4,opacity:1,layers:[{id:"listed_build_uk_4",sourceLayer:"listed_build_uk_4",choroplethField:"num",h3level:4,hexagons:255,minzoom:4,maxzoom:5,paint:{"fill-color":["step",["get","num"],"#f7fcf5",86,"#caeac3",510,"#7bc87c",1635,"#2a924a",3715,"#00441b"],"fill-opacity":.8,"fill-outline-color":"rgba(0, 0, 0, 0.3)"}},{id:"listed_build_uk_5",sourceLayer:"listed_build_uk_5",choroplethField:"num",h3level:5,hexagons:1360,minzoom:5,maxzoom:6,paint:{"fill-color":["step",["get","num"],"#f7fcf5",20,"#caeac3",127,"#7bc87c",312,"#2a924a",643,"#00441b"],"fill-opacity":.8,"fill-outline-color":"rgba(0, 0, 0, 0.3)"}},{id:"listed_build_uk_6",sourceLayer:"listed_build_uk_6",choroplethField:"num",h3level:6,hexagons:7304,minzoom:6,maxzoom:7,paint:{"fill-color":["step",["get","num"],"#edf8e9",6,"#bae4b3",23,"#74c476",51,"#006d2c",101,"#023300"],"fill-opacity":.8,"fill-outline-color":"rgba(0, 0, 0, 0.3)"}},{id:"listed_build_uk_7",sourceLayer:"listed_build_uk_7",choroplethField:"num",h3level:7,hexagons:34502,minzoom:7,maxzoom:9,paint:{"fill-color":["step",["get","num"],"#edf8e9",2,"#bae4b3",4,"#74c476",8,"#006d2c",17,"#023300"],"fill-opacity":.8,"fill-outline-color":"rgba(0, 0, 0, 0.3)"}},{id:"listed_build_uk_8",sourceLayer:"listed_build_uk_8",choroplethField:"num",h3level:8,hexagons:96094,minzoom:9,maxzoom:14,paint:{"fill-color":["step",["get","num"],"#f7fcf5",1,"#b2e0ab",2,"#3da75a",4,"#00441b"],"fill-opacity":.8,"fill-outline-color":"rgba(0, 0, 0, 0.3)"}}],pointsLayers:[{id:"histplacespoints",sourceLayer:"listed_build_uk_points",minzoom:12,maxzoom:16,paint:{"circle-color":"#ff6321","circle-opacity":.9,"circle-radius":8,"circle-stroke-width":1,"circle-stroke-color":"#000"}}]}),getters:{layersPalettes:s=>{const c=s.layers,r=[];class t{constructor(x,e,o){this.min=x,this.max=e,this.color=o}}return c.forEach(a=>{const x=a.paint["fill-color"],e=x.filter((i,l)=>l>=2),o=[];e.forEach((i,l)=>{typeof i=="string"&&(l==0?o.push(new t("",e[l+1],i)):l!==e.length-1?o.push(new t(e[l-1],e[l+1],i)):l==e.length-1&&o.push(new t(e[l-1],"",i)))}),r.push({layer:a.id,palette:o})}),r}},actions:{}});export{m};
