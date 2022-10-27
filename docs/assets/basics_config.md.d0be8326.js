import{_ as s,c as e,o as a,d as l}from"./app.07b6c413.js";const y=JSON.parse('{"title":"Config","description":"","frontmatter":{},"headers":[{"level":2,"title":"name","slug":"name","link":"#name","children":[]},{"level":2,"title":"appUrl","slug":"appurl","link":"#appurl","children":[]},{"level":2,"title":"register","slug":"register","link":"#register","children":[]},{"level":2,"title":"hoursSessionValid","slug":"hourssessionvalid","link":"#hourssessionvalid","children":[]},{"level":2,"title":"minutesForgotPasswordLinkValid","slug":"minutesforgotpasswordlinkvalid","link":"#minutesforgotpasswordlinkvalid","children":[]},{"level":2,"title":"minimumPasswordLength","slug":"minimumpasswordlength","link":"#minimumpasswordlength","children":[]},{"level":2,"title":"mail","slug":"mail","link":"#mail","children":[]},{"level":2,"title":"hmacKey","slug":"hmackey","link":"#hmackey","children":[]}],"relativePath":"basics/config.md"}'),n={name:"basics/config.md"},i=l(`<h1 id="config" tabindex="-1">Config <a class="header-anchor" href="#config" aria-hidden="true">#</a></h1><p>This page lists the keys that you can customize in the <code>oksy.config.ts</code> file.</p><h2 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-hidden="true">#</a></h2><ul><li>Required</li><li>Type: <code>string</code></li></ul><p>The name of your app.</p><ul><li>Used for <code>&lt;title&gt;</code> in <code>&lt;head&gt;</code></li><li>Used as PWA app name</li></ul><h2 id="appurl" tabindex="-1">appUrl <a class="header-anchor" href="#appurl" aria-hidden="true">#</a></h2><ul><li>Type: <code>string</code></li><li>Default: <code>http://0.0.0.0:8000</code></li></ul><p>The URL of your app.</p><h2 id="register" tabindex="-1">register <a class="header-anchor" href="#register" aria-hidden="true">#</a></h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>If users are allowed to register.</p><h2 id="hourssessionvalid" tabindex="-1">hoursSessionValid <a class="header-anchor" href="#hourssessionvalid" aria-hidden="true">#</a></h2><ul><li>Type: <code>number</code></li><li>Default: <code>24 * 7</code></li></ul><p>Amount of hours a user session is valid for. The more sensitive data you store the lower this number should be.</p><h2 id="minutesforgotpasswordlinkvalid" tabindex="-1">minutesForgotPasswordLinkValid <a class="header-anchor" href="#minutesforgotpasswordlinkvalid" aria-hidden="true">#</a></h2><ul><li>Type: <code>number</code></li><li>Default: <code>30</code></li></ul><p>Amount of minutes a password reset link is valid for.</p><h2 id="minimumpasswordlength" tabindex="-1">minimumPasswordLength <a class="header-anchor" href="#minimumpasswordlength" aria-hidden="true">#</a></h2><ul><li>Type: <code>number</code></li><li>Default: <code>5</code></li></ul><p>The minimum length of a password.</p><h2 id="mail" tabindex="-1">mail <a class="header-anchor" href="#mail" aria-hidden="true">#</a></h2><ul><li>Type: <code>&#39;mail&#39; | SMTPConfig</code></li><li>Default: <code>mail</code></li></ul><p>The driver user for sending email.</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SMTPConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="hmackey" tabindex="-1">hmacKey <a class="header-anchor" href="#hmackey" aria-hidden="true">#</a></h2><ul><li>Type: <code>string</code></li><li>Default: <strong>randomlyGenerated</strong></li></ul><p>The key used for password hashing.</p>`,28),o=[i];function r(t,p,c,d,h,u){return a(),e("div",null,o)}const g=s(n,[["render",r]]);export{y as __pageData,g as default};
