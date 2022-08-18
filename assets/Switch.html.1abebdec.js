import{S as d,B as v}from"./index.07e0a0ed.js";import{_ as m,r as l,K as c,o as g,c as b,d as i,u,t as h,a as n,b as a,e as k}from"./app.713aa93a.js";const w=n("h1",{id:"switch-\u5207\u6362\u5F00\u5173",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#switch-\u5207\u6362\u5F00\u5173","aria-hidden":"true"},"#"),a(" Switch \u5207\u6362\u5F00\u5173")],-1),_=n("h1",{id:"\u57FA\u672C\u4F7F\u7528",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u57FA\u672C\u4F7F\u7528","aria-hidden":"true"},"#"),a(" \u57FA\u672C\u4F7F\u7528")],-1),f=n("p",null,[a("\u4F7F\u7528 "),n("code",null,"v-model"),a(" \u7ED1\u5B9A\u4E00\u4E2A "),n("code",null,"boolean"),a(" \u503C\u7528\u4EE5\u786E\u5B9A\u5F53\u524D\u5F00\u5173\u7684\u72B6\u6001\u3002")],-1),S=n("br",null,null,-1),q=k(`<br><p><strong>\u793A\u4F8B\u4EE3\u7801</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isOpened<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Switch</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;salix-ui&#39;</span>

<span class="token keyword">const</span> isOpened<span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u7981\u7528" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528" aria-hidden="true">#</a> \u7981\u7528</h1><p>\u4F7F\u7528 <code>v-model</code> \u7ED1\u5B9A <code>disabled</code> \u5C5E\u6027\u4E00\u4E2A <code>boolean</code> \u53D8\u91CF\u7528\u4EE5\u786E\u5B9A\u5F53\u524D\u5F00\u5173\u662F\u5426\u7981\u7528\u3002</p><br>`,6),x=k(`<p><strong>\u793A\u4F8B\u4EE3\u7801</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isOpened<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isDisabled<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> 
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleDisabledBtnClick<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isDisabled?<span class="token punctuation">&#39;</span>\u542F\u7528<span class="token punctuation">&#39;</span>:<span class="token punctuation">&#39;</span>\u7981\u7528<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> 
    <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Switch<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;salix-ui&#39;</span>

<span class="token keyword">const</span> isOpened <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> isDisabled<span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleDisabledBtnClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    isDisabled<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>isDisabled<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),y={__name:"Switch.html",setup(D){const t=l(!0);c(t,()=>{console.log("BasicDemo Switch is opened: ",t.value)});const e=l(!1);c(e,()=>{console.log("DisableDemo Switch is opened: ",e.value)});const s=l(!0);c(s,()=>{console.log("DisableDemo Switch is disabled: ",s.value)});const r=()=>{s.value=!s.value};return(B,p)=>(g(),b("div",null,[w,_,f,S,i(u(d),{modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=o=>t.value=o)},null,8,["modelValue"]),q,i(u(d),{modelValue:e.value,"onUpdate:modelValue":p[1]||(p[1]=o=>e.value=o),disabled:s.value},null,8,["modelValue","disabled"]),i(u(v),{class:"demo-btn",onClick:r,textContent:h(s.value?"\u542F\u7528":"\u7981\u7528")},null,8,["textContent"]),x]))}};var O=m(y,[["__file","Switch.html.vue"]]);export{O as default};
